class ApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

// Convierte params anidados a querystring (populate, filters, pagination, etc.)
function toQueryString(obj, prefix = "") {
  if (obj == null) return "";
  const pairs = [];

  const isDate = (v) => v instanceof Date;
  const isObject = (v) =>
    typeof v === "object" && v !== null && !Array.isArray(v) && !isDate(v);

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (value === undefined || value === null) return;

    const k = prefix ? `${prefix}[${encodeURIComponent(key)}]` : encodeURIComponent(key);

    if (Array.isArray(value)) {
      value.forEach((item, idx) => {
        if (isObject(item)) {
          const nested = toQueryString(item, `${k}[${idx}]`);
          if (nested) pairs.push(nested);
        } else {
          pairs.push(`${k}[${idx}]=${encodeURIComponent(String(item))}`);
        }
      });
    } else if (isObject(value)) {
      const nested = toQueryString(value, k);
      if (nested) pairs.push(nested);
    } else {
      const v = isDate(value) ? value.toISOString() : String(value);
      pairs.push(`${k}=${encodeURIComponent(v)}`);
    }
  });

  return pairs.filter(Boolean).join("&");
}

function joinUrl(baseUrl, path) {
  const b = baseUrl.replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${b}${p}`;
}

function readEnv(name) {
  // Next: process.env.NEXT_PUBLIC_*
  // Vite: import.meta.env.VITE_*
  if (typeof process !== "undefined" && process.env && process.env[name]) return process.env[name];
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[name]) return import.meta.env[name];
  return undefined;
}

export async function strapiRequest(path, options = {}) {
  const {
    method = "GET",
    params,
    body,
    headers = {},
    baseUrl = readEnv("NEXT_PUBLIC_STRAPI_URL") || readEnv("VITE_STRAPI_URL"),
    token = readEnv("NEXT_PUBLIC_STRAPI_TOKEN") || readEnv("VITE_STRAPI_TOKEN"),
    signal,
  } = options;

  if (!baseUrl) throw new Error("Falta STRAPI URL en variables de entorno.");

  const qs = params ? toQueryString(params) : "";
  const url = qs ? `${joinUrl(baseUrl, path)}?${qs}` : joinUrl(baseUrl, path);

  const finalHeaders = { ...headers };

  const hasBody = body !== undefined && body !== null;
  if (hasBody && !finalHeaders["Content-Type"]) {
    finalHeaders["Content-Type"] = "application/json";
  }

  if (token && !finalHeaders.Authorization) {
    finalHeaders.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method,
    headers: finalHeaders,
    body: hasBody ? JSON.stringify(body) : undefined,
    signal,
  });

  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }

  if (!res.ok) {
    const message =
      (json && json.error && json.error.message) ||
      (json && json.message) ||
      `HTTP error: ${res.status} (${res.statusText})`;
    throw new ApiError(message, res.status, json);
  }

  return json;
}
