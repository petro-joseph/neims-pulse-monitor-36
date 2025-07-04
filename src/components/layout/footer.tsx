import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp, Globe } from "lucide-react"
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
    <footer className="relative mt-auto">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-green-600"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/emblem.png"
                  alt="Ministry of Energy Logo"
                  className="h-10 w-10 rounded-lg"
                />
                <div>
                  <span className="font-bold text-xl text-white">NEIMS</span>
                  <p className="text-xs text-green-200">Ministry of Energy</p>
                </div>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">
                National Energy Information Management System - Empowering Tanzania's energy sector with comprehensive data management and analytics.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-white/10 text-white">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-yellow-400">Quick Links</h3>
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
                    className="block text-green-100 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-yellow-400">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-green-100 text-sm">
                    Ministry of Energy<br />
                    Samora Avenue, P.O. Box 2000<br />
                    Dodoma, Tanzania
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-green-100 text-sm">+255 26 232 1480</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-green-100 text-sm">info@nishati.go.tz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                  <a
                    href="https://www.nishati.go.tz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 text-sm hover:text-yellow-400 transition-colors"
                  >
                    www.nishati.go.tz
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-semibold text-yellow-400">Stay Updated</h3>
              <p className="text-green-100 text-sm">
                Subscribe to receive updates about energy data and system announcements.
              </p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-yellow-400"
                />
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-green-100">
              <div className="flex items-center space-x-2">
                <img
                  src="/emblem.png"
                  alt="Tanzania Coat of Arms"
                  className="h-6 w-6"
                />
                <span>© {currentYear} Ministry of Energy, United Republic of Tanzania</span>
              </div>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-green-300">|</span>
                <Link to="/terms" className="hover:text-yellow-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={scrollToTop}
              className="bg-yellow-500 hover:bg-yellow-600 text-green-900 group"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Government Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-green-200">
              This is an official website of the Government of the United Republic of Tanzania
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
