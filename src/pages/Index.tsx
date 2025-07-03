import { useState } from "react"
import { Link } from "react-router-dom"
import { PageLayout } from "@/components/layout/page-layout"
import { EnergyCard } from "@/components/ui/energy-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Zap, 
  BarChart3, 
  Users, 
  Database, 
  Shield, 
  TrendingUp,
  Lightbulb,
  Gauge,
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample energy data for demonstration
  const energyStats = [
    {
      title: "Total Energy Production",
      value: "2,847",
      unit: "MW",
      trend: "up" as const,
      trendValue: "+12.5%",
      icon: <Zap className="h-4 w-4" />,
      status: "approved" as const
    },
    {
      title: "Renewable Energy Share",
      value: "68.3",
      unit: "%",
      trend: "up" as const,
      trendValue: "+5.2%",
      icon: <Lightbulb className="h-4 w-4" />,
      status: "approved" as const
    },
    {
      title: "Data Submissions",
      value: "156",
      unit: "this month",
      trend: "neutral" as const,
      trendValue: "±0%",
      icon: <Database className="h-4 w-4" />,
      status: "pending" as const
    },
    {
      title: "Active Providers",
      value: "47",
      unit: "institutions",
      trend: "up" as const,
      trendValue: "+3",
      icon: <Users className="h-4 w-4" />,
      status: "approved" as const
    }
  ]

  const userRoleCards = [
    {
      title: "System Administrators",
      description: "Full system access and management capabilities",
      features: ["User Management", "System Settings", "Data Validation", "Reports"],
      icon: <Shield className="h-8 w-8" />,
      href: "/login"
    },
    {
      title: "Data Providers",
      description: "Submit and manage energy data from institutions",
      features: ["Data Entry", "Upload Templates", "Track Submissions", "Export Data"],
      icon: <Database className="h-8 w-8" />,
      href: "/login"
    },
    {
      title: "Senior Officials",
      description: "Access reports and insights for decision making",
      features: ["Custom Reports", "Data Analytics", "Trend Analysis", "Dashboard"],
      icon: <BarChart3 className="h-8 w-8" />,
      href: "/login"
    },
    {
      title: "Researchers & Analysts",
      description: "Analyze energy data and generate insights",
      features: ["Data Analysis", "Research Tools", "Visualizations", "Export Data"],
      icon: <TrendingUp className="h-8 w-8" />,
      href: "/login"
    }
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero-gradient relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 glow-button">
                <Globe className="h-3 w-3 mr-1" />
                Tanzania Energy Data Portal
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold neon-text">
                National Energy 
                <span className="text-primary block">Information System</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Empowering Tanzania's energy sector with comprehensive data management, 
                analytics, and real-time insights for sustainable development.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search energy data, reports, or institutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 glow-button">
                  Search
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/public">
                <Button size="lg" className="glow-button group">
                  <Globe className="mr-2 h-5 w-5" />
                  Explore Public Data
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="glow-button">
                  <Users className="mr-2 h-5 w-5" />
                  Access Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Statistics */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
              Real-Time Energy Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Live data from across Tanzania's energy sector, updated in real-time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {energyStats.map((stat, index) => (
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
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Access Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
              Choose Your Access Level
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different access levels for different user types - from data providers to system administrators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userRoleCards.map((card, index) => (
              <div
                key={index}
                className="energy-card group animate-fade-in"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {card.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-center mb-2 neon-text">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    {card.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={card.href}>
                    <Button className="w-full glow-button group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Access Highlight */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 glow-button">
                <Globe className="h-3 w-3 mr-1" />
                Open Data Initiative
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">
                Public Energy Data Access
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access Tanzania's energy data without login. Explore interactive charts, 
                download reports, and gain insights into our national energy landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Interactive Charts</h3>
                <p className="text-sm text-muted-foreground">Visualize energy trends and consumption patterns</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Download Reports</h3>
                <p className="text-sm text-muted-foreground">Export data in PDF and CSV formats</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Gauge className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Real-time Insights</h3>
                <p className="text-sm text-muted-foreground">Access up-to-date energy sector data</p>
              </div>
            </div>

            <Link to="/public">
              <Button size="lg" className="glow-button group">
                <Globe className="mr-2 h-5 w-5" />
                Access Public Data
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
