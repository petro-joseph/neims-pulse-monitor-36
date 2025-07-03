import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border/40 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center glow-button">
                <span className="text-primary-foreground font-bold text-lg neon-text">N</span>
              </div>
              <span className="font-bold text-xl neon-text">NEIMS</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              National Energy Information Management System - Empowering Tanzania's energy sector with comprehensive data management and analytics.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="glow-button">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="glow-button">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="glow-button">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/public", label: "Public Data" },
                { href: "/about", label: "About NEIMS" },
                { href: "/contact", label: "Contact Us" },
                { href: "/faq", label: "FAQs" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Ministry of Energy<br />
                  Dodoma, Tanzania
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+255 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@neims.go.tz</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to receive updates about energy data and system announcements.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background"
              />
              <Button className="w-full glow-button">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <span>© {currentYear} Ministry of Energy, Tanzania. All rights reserved.</span>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={scrollToTop}
            className="glow-button group"
          >
            <ArrowUp className="h-4 w-4 group-hover:animate-float" />
          </Button>
        </div>
      </div>
    </footer>
  )
}