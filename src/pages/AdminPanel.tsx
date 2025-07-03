
import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Users, 
  Database, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Settings,
  Plus,
  Search,
  Eye,
  UserPlus,
  FileText,
  Shield
} from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

const AdminPanel = () => {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for admin panel
  const quickStats = [
    {
      title: "User Accounts",
      value: "101",
      icon: <Users className="h-5 w-5" />,
      color: "bg-blue-500"
    },
    {
      title: "Pending Validations",
      value: "7",
      icon: <Clock className="h-5 w-5" />,
      color: "bg-yellow-500"
    },
    {
      title: "Pending Reports",
      value: "12",
      icon: <FileText className="h-5 w-5" />,
      color: "bg-orange-500"
    },
    {
      title: "Errors",
      value: "3",
      icon: <AlertCircle className="h-5 w-5" />,
      color: "bg-red-500"
    }
  ]

  const quickActions = [
    {
      title: "New User",
      description: "Add a new system user",
      icon: <UserPlus className="h-6 w-6" />,
      action: "create-user"
    },
    {
      title: "Assign Data Access Permission",
      description: "Grant or modify data access rights",
      icon: <Shield className="h-6 w-6" />,
      action: "assign-permissions"
    },
    {
      title: "View Feedback",
      description: "Review user and stakeholder feedback",
      icon: <Eye className="h-6 w-6" />,
      action: "view-feedback"
    }
  ]

  const configurationOptions = [
    "Data Types",
    "User Accounts", 
    "Templates",
    "Sectors",
    "Data Sources",
    "Frequencies",
    "Permissions",
    "Notifications",
    "API Integration"
  ]

  const recentFeedback = [
    {
      id: 1,
      name: "Dr. Sarah Mwalimu",
      feedback: "System performance has improved significantly",
      date: "2 hours ago",
      status: "viewed"
    },
    {
      id: 2,
      name: "Eng. Michael Juma", 
      feedback: "Data validation process could be streamlined",
      date: "1 day ago",
      status: "pending"
    }
  ]

  if (user?.role !== 'admin') {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-destructive mb-4" />
            <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
            <p className="text-muted-foreground">You don't have permission to access the admin panel.</p>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold neon-text mb-2">Administrator Panel</h1>
          <p className="text-muted-foreground">Ministry of Energy - System Administration</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="energy-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold neon-text">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="lg:col-span-1">
            <Card className="energy-card mb-6">
              <CardHeader>
                <CardTitle className="neon-text">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 glow-button"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {action.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-medium">{action.title}</div>
                        <div className="text-xs text-muted-foreground">{action.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Configuration Menu */}
            <Card className="energy-card">
              <CardHeader>
                <CardTitle className="neon-text flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {configurationOptions.map((option, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full justify-start text-sm"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* EWURA Admin Notifications */}
            <Card className="energy-card mb-6">
              <CardHeader>
                <CardTitle className="neon-text">EWURA Admin</CardTitle>
                <CardDescription>You have 5 notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Badge variant="destructive">10</Badge>
                      <span className="font-medium">User Accounts</span>
                    </div>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">7</Badge>
                      <span className="font-medium">Pending Validations</span>
                    </div>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">12</Badge>
                      <span className="font-medium">Pending Reports</span>
                    </div>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User & Stakeholder Feedback */}
            <Card className="energy-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="neon-text">User & Stakeholder Feedback</CardTitle>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((feedback) => (
                    <div key={feedback.id} className="flex items-start justify-between p-4 border border-border/50 rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">{feedback.name}</div>
                        <div className="text-sm text-muted-foreground">{feedback.feedback}</div>
                        <div className="text-xs text-muted-foreground">{feedback.date}</div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AdminPanel
