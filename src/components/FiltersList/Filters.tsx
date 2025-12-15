import Image from "next/image";

// slug (Strapi) -> tipo (tu Dog.tipo)
const SLUG_TO_TIPO = {
  cachorros: "cachorro",
  hembras: "hembra",
  machos: "macho",
  gatos: "gatito",
  gatas: "gatita",
};

// estilos/iconos por tipo (tu UI)
const UI_BY_TIPO = {
  cachorro: { color: "bg-red-100", ring: "ring-red-300", icon: "/cachorros.svg" },
  hembra: { color: "bg-pink-100", ring: "ring-pink-300", icon: "/hembras.svg" },
  macho: { color: "bg-indigo-100", ring: "ring-indigo-300", icon: "/machos.svg" },
  gatito: { color: "bg-orange-100", ring: "ring-orange-300", icon: "/machos-gatos.svg" },
  gatita: { color: "bg-yellow-100", ring: "ring-yellow-300", icon: "/Hembras-gatos.svg" },
};

const DEFAULT_UI = { color: "bg-gray-100", ring: "ring-gray-300", icon: "/cachorros.svg" };

export default function Filters({ categories = [], selectedFilter, setFilter }) {
  // Si ya llegaron categorías de Strapi, usamos esas.
  // Si no, puedes seguir mostrando los 5 defaults (opcional).
  const filters = categories.length
    ? categories.map((c) => {
        const tipo = SLUG_TO_TIPO[c.slug] || c.slug; // fallback
        const ui = UI_BY_TIPO[tipo] || DEFAULT_UI;

        return {
          id: c.id,
          label: c.name,   // viene de Strapi (ej. "cachorros")
          value: tipo,     // tu tipo interno (ej. "cachorro")
          ...ui,
        };
      })
    : [
        { id: "cachorro", label: "Cachorros", value: "cachorro", ...UI_BY_TIPO.cachorro },
        { id: "hembra", label: "Hembras", value: "hembra", ...UI_BY_TIPO.hembra },
        { id: "macho", label: "Machos", value: "macho", ...UI_BY_TIPO.macho },
        { id: "gatito", label: "Gatitos", value: "gatito", ...UI_BY_TIPO.gatito },
        { id: "gatita", label: "Gatitas", value: "gatita", ...UI_BY_TIPO.gatita },
      ];

  return (
    <div className="mb-6">
      <div className="flex space-x-2 justify-start overflow-x-auto md:justify-center sm:overflow-visible scrollbar-hide p-1">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`min-w-fit flex items-center px-2 py-2 rounded-full ${filter.color}
              ${selectedFilter === filter.value ? `ring-2 ${filter.ring}` : ""}`}
            onClick={() => setFilter(filter.value)}
          >
            <div className="rounded-full bg-white w-11 h-11 flex items-center justify-center">
              <Image src={filter.icon} alt={filter.label} width={28} height={28} />
            </div>
            <p className="mx-2 w-fit">{filter.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
