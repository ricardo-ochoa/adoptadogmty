// components/links/SocialLink.tsx
import Link from "next/link";

export interface SocialLinkProps {
  href: string;
  iconSrc: string;
  altText: string;
  label: string;
}

export function SocialLink({ href, iconSrc, altText, label }: SocialLinkProps) {
  return (
    <Link href={href} className="group relative" target="_blank" rel="noopener noreferrer">
      <img
        src={iconSrc}
        alt={altText}
        width={24}
        height={24}
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
      />

      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
}
