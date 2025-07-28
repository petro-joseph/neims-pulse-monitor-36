import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useAuth } from "@/contexts/AuthContext";

interface PageLayoutProps {
  children: ReactNode;
  userRole?: string;
  userName?: string;
  isLoggedIn?: boolean;
  showFooter?: boolean;
}

export function PageLayout({ 
  children, 
  userRole, 
  userName, 
  isLoggedIn, 
  showFooter = true 
}: PageLayoutProps) {
  // You already have the auth status right here!
  const { user, isAuthenticated } = useAuth();

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
      
      {/* 
        MODIFIED LINE:
        Show the footer ONLY IF:
        1. The user is NOT authenticated (!isAuthenticated)
        2. The showFooter prop is true
      */}
      {!isAuthenticated && showFooter && <Footer />}
    </div>
  );
}
