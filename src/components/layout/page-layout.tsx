
import { ReactNode } from "react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { useAuth } from "@/contexts/AuthContext"

interface PageLayoutProps {
  children: ReactNode
  userRole?: string
  userName?: string
  isLoggedIn?: boolean
  showFooter?: boolean
}

export function PageLayout({ 
  children, 
  userRole, 
  userName, 
  isLoggedIn, 
  showFooter = true 
}: PageLayoutProps) {
  const { user, isAuthenticated } = useAuth()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar 
        userRole={user?.role || userRole} 
        userName={user?.name || userName} 
        isLoggedIn={isAuthenticated || isLoggedIn} 
      />
      
      <main className="flex-1 page-transition">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  )
}
