// components/links/LinkButton.tsx
import Image from "next/image";
import Link from "next/link";

export interface LinkButtonProps {
  href: string;
  imageSrc: string;
  altText: string;
  text: string;
}

export function LinkButton({ href, imageSrc, altText, text }: LinkButtonProps) {
  const isSvg = imageSrc.toLowerCase().endsWith(".svg");

  return (
    <Link href={href} className="block" target="_blank" rel="noopener noreferrer">
      <button className="w-full px-1 bg-white text-purple-700 border-white border-2 rounded-full py-1 flex items-center justify-between hover:border-purple-700 hover:border-2 transform transition duration-300 hover:scale-105">
        <div className="flex items-center">
          {isSvg ? (
            <img src={imageSrc} alt={altText} width={40} height={40} className="mr-3 rounded" />
          ) : (
            <Image src={imageSrc} alt={altText} width={40} height={40} className="mr-3 rounded" />
          )}

          <p className="text-sm">{text}</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </Link>
  );
}
