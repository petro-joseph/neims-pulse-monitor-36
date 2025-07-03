
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { PageLayout } from "@/components/layout/page-layout"
import { EnergyCard } from "@/components/ui/energy-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/contexts/AuthContext"
import {
  BarChart3,
  Users,
  Database,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Settings,
  Bell,
  Download,
  Plus,
  Activity,
  Shield
} from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { user, isAuthenticated } = useAuth()

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // Role-specific dashboard stats
  const getDashboardStats = () => {
    const baseStats = [
      {
        title: "Total Data Entries",
        value: "1,247",
        unit: "this month",
        trend: "up" as const,
        trendValue: "+12.3%",
        icon: <Database className="h-4 w-4" />,
        status: "approved" as const
      }
    ]

    switch (user?.role) {
      case 'admin':
        return [
          ...baseStats,
          {
            title: "System Health",
            value: "99.8",
            unit: "%",
            trend: "up" as const,
            trendValue: "+0.2%",
            icon: <Activity className="h-4 w-4" />,
            status: "approved" as const
          },
          {
            title: "Active Users",
            value: "156",
            unit: "online",
            trend: "up" as const,
            trendValue: "+8",
            icon: <Users className="h-4 w-4" />,
            status: "approved" as const
          },
          {
            title: "Pending Validations",
            value: "23",
            unit: "items",
            trend: "down" as const,
            trendValue: "-8.5%",
            icon: <Clock className="h-4 w-4" />,
            status: "pending" as const
          }
        ]
      
      case 'data_provider':
        return [
          {
            title: "My Submissions",
            value: "34",
            unit: "this month",
            trend: "up" as const,
            trendValue: "+5",
            icon: <Database className="h-4 w-4" />,
            status: "approved" as const
          },
          {
            title: "Pending Approval",
            value: "3",
            unit: "items",
            trend: "down" as const,
            trendValue: "-2",
            icon: <Clock className="h-4 w-4" />,
            status: "pending" as const
          },
          {
            title: "Data Quality Score",
            value: "94.2",
            unit: "%",
            trend: "up" as const,
            trendValue: "+2.1%",
            icon: <CheckCircle className="h-4 w-4" />,
            status: "approved" as const
          },
          {
            title: "Last Submission",
            value: "2",
            unit: "days ago",
            trend: "neutral" as const,
            trendValue: "±0",
            icon: <Activity className="h-4 w-4" />,
            status: "approved" as const
          }
        ]

      case 'senior_official':
      case 'management':
        return [
          ...baseStats,
          {
            title: "Generated Reports",
            value: "12",
            unit: "this month",
            trend: "up" as const,
            trendValue: "+3",
            icon: <BarChart3 className="h-4 w-4" />,
            status: "approved" as const
          },
          {
            title: "Energy Efficiency",
            value: "82.5",
            unit: "%",
            trend: "up" as const,
            trendValue: "+1.8%",
            icon: <TrendingUp className="h-4 w-4" />,
            status: "approved" as const
          },
          {
            title: "Policy Reviews",
            value: "7",
            unit: "pending",
            trend: "neutral" as const,
            trendValue: "±0",
            icon: <Settings className="h-4 w-4" />,
            status: "pending" as const
          }
        ]

      case 'analyst':
        return [
          ...baseStats,
          {
            title: "Analysis Reports",
            value: "18",
            unit: "completed",
            trend: "up" as const,
            trendValue: "+6",
            icon: <BarChart3 className="h-4 w-4" />,
            status: "approved" as const
          },
          {
            title: "Data Models",
            value: "5",
            unit: "active",
            trend: "up" as const,
            trendValue: "+2",
            icon: <TrendingUp className="h-4 w-4" />,
            status: "approved" as const
          },
          {
            title: "Forecast Accuracy",
            value: "91.7",
            unit: "%",
            trend: "up" as const,
            trendValue: "+3.2%",
            icon: <Zap className="h-4 w-4" />,
            status: "approved" as const
          }
        ]

      default:
        return baseStats
    }
  }

  const dashboardStats = getDashboardStats()

  const getRoleSpecificContent = () => {
    switch (user?.role) {
      case 'admin':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">System Administration</h4>
              <p className="text-sm text-muted-foreground">Manage users, roles, and system settings</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">User Management</h4>
              <p className="text-sm text-muted-foreground">Configure access and permissions</p>
            </div>
          </div>
        )

      case 'data_provider':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <Database className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Data Submission</h4>
              <p className="text-sm text-muted-foreground">Submit and manage energy data</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Quality Metrics</h4>
              <p className="text-sm text-muted-foreground">Track data quality and validation</p>
            </div>
          </div>
        )

      case 'senior_official':
      case 'management':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Strategic Reports</h4>
              <p className="text-sm text-muted-foreground">Generate executive summaries</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <Settings className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Policy Overview</h4>
              <p className="text-sm text-muted-foreground">Monitor policy implementation</p>
            </div>
          </div>
        )

      case 'analyst':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Trend Analysis</h4>
              <p className="text-sm text-muted-foreground">Advanced data analytics</p>
            </div>
            <div className="text-center p-6 bg-muted/20 rounded-lg">
              <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Predictive Models</h4>
              <p className="text-sm text-muted-foreground">Energy forecasting tools</p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <PageLayout>
      {/* Dashboard Header */}
      <section className="bg-muted/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold neon-text">
                Welcome back, {user?.name?.split(' ')[0]}
              </h1>
              <p className="text-muted-foreground mt-2">
                {user?.role === 'admin' && "System administration dashboard"}
                {user?.role === 'data_provider' && `Data submission portal - ${user?.institution}`}
                {user?.role === 'senior_official' && "Executive overview dashboard"}
                {user?.role === 'management' && "Ministry management portal"}
                {user?.role === 'analyst' && "Analytics and research dashboard"}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="glow-button">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button className="glow-button">
                <Plus className="h-4 w-4 mr-2" />
                {user?.role === 'data_provider' ? 'Add Data' : 'Generate Report'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <EnergyCard
                key={index}
                title={stat.title}
                value={stat.value}
                unit={stat.unit}
                trend={stat.trend}
                trendValue={stat.trendValue}
                icon={stat.icon}
                status={stat.status}
                glowEffect={index === 0}
              />
            ))}
          </div>

          {/* Role-specific content */}
          <Card className="energy-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                {user?.role === 'admin' && 'System Management'}
                {user?.role === 'data_provider' && 'Data Management'}
                {user?.role === 'senior_official' && 'Executive Dashboard'}
                {user?.role === 'management' && 'Ministry Overview'}
                {user?.role === 'analyst' && 'Analytics Dashboard'}
              </CardTitle>
              <CardDescription>
                Role-specific tools and insights for your responsibilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              {getRoleSpecificContent()}
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  )
}
