
import React, { createContext, useContext, useState, ReactNode } from 'react'

export type UserRole = 'admin' | 'senior_official' | 'data_provider' | 'analyst' | 'management'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  institution?: string
  permissions: string[]
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for different roles
const mockUsers: Record<string, User> = {
  'admin@neims.go.tz': {
    id: '1',
    name: 'John Mwalimu',
    email: 'admin@neims.go.tz',
    role: 'admin',
    institution: 'Ministry of Energy',
    permissions: ['all']
  },
  'official@moe.go.tz': {
    id: '2',
    name: 'Dr. Sarah Mwalimu',
    email: 'official@moe.go.tz',
    role: 'senior_official',
    institution: 'Ministry of Energy',
    permissions: ['view_reports', 'generate_reports', 'view_dashboard']
  },
  'provider@tanesco.co.tz': {
    id: '3',
    name: 'Eng. Michael Juma',
    email: 'provider@tanesco.co.tz',
    role: 'data_provider',
    institution: 'Tanzania Electric Supply Company',
    permissions: ['submit_data', 'view_submissions', 'manage_profile']
  },
  'analyst@neims.go.tz': {
    id: '4',
    name: 'Mary Kipanga',
    email: 'analyst@neims.go.tz',
    role: 'analyst',
    institution: 'NEIMS Research Division',
    permissions: ['analyze_data', 'generate_reports', 'view_dashboard']
  },
  'management@moe.go.tz': {
    id: '5',
    name: 'Prof. James Masanja',
    email: 'management@moe.go.tz',
    role: 'management',
    institution: 'Ministry of Energy',
    permissions: ['view_reports', 'approve_policies', 'view_dashboard']
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app this would call an API
    const foundUser = mockUsers[email.toLowerCase()]
    
    if (foundUser && password === 'password123') {
      setUser(foundUser)
      localStorage.setItem('neims_user', JSON.stringify(foundUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('neims_user')
  }

  // Check for existing session on mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('neims_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        logout, 
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
