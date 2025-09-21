import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/shubham11602152/Vector",
    label: "GitHub",
  },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
];

const companyLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "Podcast", href: "/podcast" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
];

const servicesLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Talk to Experts", href: "/contact" },
];

const contactLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 min-w-[120px]">
      <h4 className="font-semibold mb-2 text-base">{title}</h4>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/80 py-10 px-4 mt-20">
      <div className="container mx-auto flex justify-between px-4 flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo, address, socials */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl tracking-tight select-none">
              Vector
            </span>
            <address className="not-italic text-sm text-muted-foreground">
              123 Main Street
              <br />
              New Delhi, India
              <br />
              110001
            </address>
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Our Company */}
            <FooterColumn title="Our Company">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:underline text-sm text-muted-foreground"
                >
                  {link.label}
                </a>
              ))}
            </FooterColumn>
            {/* Services */}
            <FooterColumn title="Services">
              {servicesLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:underline text-sm text-muted-foreground"
                >
                  {link.label}
                </a>
              ))}
            </FooterColumn>
            {/* Contact */}
            <FooterColumn title="Contact">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:underline text-sm text-muted-foreground"
                >
                  {link.label}
                </a>
              ))}
            </FooterColumn>
          </div>
        </div>
        <div className="border-t pt-6 text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Vector. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
