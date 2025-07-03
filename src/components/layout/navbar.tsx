
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X, User, LogOut, Home, BarChart3, Settings, HelpCircle, Database, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/AuthContext"
import { cn } from "@/lib/utils"

interface NavbarProps {
  userRole?: string
  userName?: string
  isLoggedIn?: boolean
}

export function Navbar({ userRole, userName, isLoggedIn }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout, isAuthenticated } = useAuth()

  // Use auth context if available, otherwise use props
  const actualUser = user || { name: userName || "Guest User", role: userRole || "guest" }
  const actualIsLoggedIn = isAuthenticated || isLoggedIn || false

  const isActive = (path: string) => location.pathname === path

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const publicLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/public", label: "Public Data", icon: BarChart3 },
    { href: "/about", label: "About NEIMS", icon: HelpCircle },
  ]

  const getInternalLinks = () => {
    if (!user) return []

    const baseLinks = [
      { href: "/dashboard", label: "Dashboard", icon: Home },
    ]

    // Add role-specific links
    switch (user.role) {
      case 'admin':
        return [
          ...baseLinks,
          { href: "/data-entry", label: "Data Management", icon: Database },
          { href: "/admin", label: "Admin Panel", icon: Shield },
          { href: "/reports", label: "Reports", icon: BarChart3 },
        ]
      case 'data_provider':
        return [
          ...baseLinks,
          { href: "/data-entry", label: "Data Entry", icon: Database },
          { href: "/reports", label: "My Reports", icon: BarChart3 },
        ]
      case 'senior_official':
      case 'management':
        return [
          ...baseLinks,
          { href: "/reports", label: "Reports", icon: BarChart3 },
          { href: "/compliance", label: "Compliance", icon: Settings },
        ]
      case 'analyst':
        return [
          ...baseLinks,
          { href: "/analytics", label: "Analytics", icon: BarChart3 },
          { href: "/reports", label: "Reports", icon: BarChart3 },
        ]
      default:
        return baseLinks
    }
  }

  const displayLinks = actualIsLoggedIn ? getInternalLinks() : publicLinks

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center glow-button">
              <span className="text-primary-foreground font-bold text-lg neon-text">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg neon-text">NEIMS</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Energy Information Management</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {displayLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 glow-button",
                    isActive(link.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            {actualIsLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full glow-button">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-avatar.jpg" alt={actualUser.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {actualUser.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-popover">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{actualUser.name}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {actualUser.role?.replace('_', ' ')}
                      </p>
                      {user?.institution && (
                        <p className="text-xs text-muted-foreground">{user.institution}</p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-destructive focus:text-destructive"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="outline" className="glow-button">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glow-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/40 py-4 animate-slide-in-right">
            <div className="flex flex-col space-y-2">
              {displayLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                      isActive(link.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
