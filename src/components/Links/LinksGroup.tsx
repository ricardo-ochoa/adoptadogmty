// components/links/LinksGroup.tsx
import "animate.css";
import { LinkButton } from "./LinkButton";
import { SocialLink } from "./SocialLink";
import { UISocialLink, UILinkButton } from "@/lib/linksPage";

export function LinksGroup({
  socialLinks,
  links,
  animated = true,
}: {
  socialLinks: UISocialLink[];
  links: UILinkButton[];
  animated?: boolean;
}) {
  const socialClass = animated ? "animate__animated animate__fadeInDown" : "";
  const linksClass = animated ? "animate__animated animate__backInUp" : "";

  return (
    <>
      <div className={`flex gap-8 mb-8 ${socialClass}`}>
        {socialLinks.map((social) => (
          <SocialLink key={social.href} {...social} />
        ))}
      </div>

      <div className={`w-full max-w-md space-y-3 mb-10 px-8 lg:px-0 ${linksClass}`}>
        {links.map((link) => (
          <LinkButton key={link.href} {...link} />
        ))}
      </div>
    </>
  );
}
