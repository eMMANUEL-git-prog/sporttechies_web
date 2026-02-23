import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Platform", href: "#" },
    { label: "Features", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Pricing", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Research", href: "#" },
    { label: "Press", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background/70 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand column */}
          <div className="flex max-w-xs flex-col gap-4">
            <Image
              src="/images/hero-tech.jpg"
              alt="SportTechies"
              width={10}
              height={40}
              className="h-7 w-auto sm:h-8"
              priority
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Engineering the future of sports technology from the ground up.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-12 sm:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  {category}
                </h3>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground/60">
            {"© 2026 SportTechies Innovations Limited. All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <Link
              href="#"
              className="text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
