
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/AuthContext"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { 
  User, 
  Lock, 
  Shield, 
  Users, 
  Database, 
  BarChart3, 
  Settings,
  Eye,
  EyeOff
} from "lucide-react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const success = await login(email, password)
      if (success) {
        navigate('/dashboard')
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("An error occurred during login")
    } finally {
      setLoading(false)
    }
  }

  const demoAccounts = [
    {
      role: "System Administrator",
      email: "admin@neims.go.tz",
      icon: <Shield className="h-4 w-4" />,
      description: "Full system access and management"
    },
    {
      role: "Senior MoE Official",
      email: "official@moe.go.tz", 
      icon: <Settings className="h-4 w-4" />,
      description: "Reports and strategic oversight"
    },
    {
      role: "Data Provider",
      email: "provider@tanesco.co.tz",
      icon: <Database className="h-4 w-4" />,
      description: "Submit and manage energy data"
    },
    {
      role: "Analyst/Researcher",
      email: "analyst@neims.go.tz",
      icon: <BarChart3 className="h-4 w-4" />,
      description: "Analyze data and generate insights"
    },
    {
      role: "Ministry Management",
      email: "management@moe.go.tz",
      icon: <Users className="h-4 w-4" />,
      description: "Policy and compliance oversight"
    }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Login Form */}
        <Card className="energy-card">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-lg bg-pri flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                <img src="/emblem.png" alt="" />
              </span>
            </div>
            <CardTitle className="text-2xl neon-text">Sign In to NEIMS</CardTitle>
            <CardDescription>
              National Energy Information Management System
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                  </Button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full glow-button" 
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>Demo Password: <Badge variant="secondary">password123</Badge></p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Demo Accounts */}
        <Card className="energy-card">
          <CardHeader>
            <CardTitle className="text-xl">Demo Accounts</CardTitle>
            <CardDescription>
              Try different user roles with these demo accounts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {demoAccounts.map((account, index) => (
                <div 
                  key={index}
                  className="p-4 bg-muted/20 rounded-lg cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => setEmail(account.email)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary">
                      {account.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{account.role}</div>
                      <div className="text-xs text-muted-foreground mb-1">
                        {account.email}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {account.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-muted/10 rounded-lg">
              <div className="text-sm">
                <div className="font-medium mb-2">Quick Access:</div>
                <div className="text-muted-foreground text-xs space-y-1">
                  <div>• Click any account above to auto-fill email</div>
                  <div>• Use password: <Badge variant="outline" className="text-xs">password123</Badge></div>
                  <div>• Each role has different dashboard features</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
