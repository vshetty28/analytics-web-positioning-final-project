import Link from "next/link"
import { MapPin, Mail } from "lucide-react"

const footerLinks = {
  routes: [
    { name: "I-95 Rest Stops", href: "/best-rest-stops-i-95" },
    { name: "I-10 Rest Stops", href: "/best-rest-stops-i-10" },
    { name: "Road Trip Stops", href: "/best-road-trip-stops-usa" },
    { name: "Travel Centers", href: "/best-travel-centers-america" },
    { name: "Highway Rest Areas", href: "/best-highway-rest-areas" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/about#contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">RestStopsUSA</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-background/70 leading-relaxed">
              Your comprehensive guide to the best rest stops across America. We help road trippers,
              families, and commercial drivers find the perfect places to stop, rest, and refuel on
              their journeys.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-background/70">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@reststopsusa.com" className="hover:text-background transition-colors">
                info@reststopsusa.com
              </a>
            </div>
          </div>

          {/* Routes */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Popular Routes</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.routes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            &copy; {new Date().getFullYear()} RestStopsUSA. All rights reserved. This website is not
            affiliated with any government agency.
          </p>
        </div>
      </div>
    </footer>
  )
}
