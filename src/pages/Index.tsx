import { useState } from "react"
import { Link } from "react-router-dom"
import { PageLayout } from "@/components/layout/page-layout"
import { EnergyCard } from "@/components/ui/energy-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
  CheckCircle,
  ExternalLink
} from "lucide-react"

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("")

  // Ministry Leadership Data
  const ministryLeadership = [
    {
      name: "Hon. Dr. Doto Mashaka Biteko",
      title: "DEPUTY PRIME MINISTER AND MINISTER FOR ENERGY",
      image: "/biteko.png", 
      profileLink: "https://www.nishati.go.tz/administration/profile/january-yusuf-makamba"
    },
    {
      name: "Hon. Judith Salvio Kapinga",
      title: "DEPUTY MINISTER FOR ENERGY",
      image: "/judith.png", 
      profileLink: "https://www.nishati.go.tz/administration/profile/stephen-lujwahuka-byabato"
    },
    {
      name: "Dr. James Peter Mataragio",
      title: "DEPUTY PERMANENT SECRETARY (PETROLEUM AND GAS)",
      image: "/james.png", 
      profileLink: "https://www.nishati.go.tz/administration/profile/james-peter-mataragio"
    }
  ]

  // Energy statistics with green/yellow theme
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

  return (
    <PageLayout>
      {/* Updated Hero Section with Ministry Branding */}
      <section className="relative overflow-hidden">
        {/* Ministry Header Section */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between space-x-4">
              <img
                src="/emblem.png"
                alt="Tanzania Coat of Arms"
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <div className="text-center text-4xl md:text-2xl text-white font-bold">
                <p className="text-white md:text-base font-medium">The United Republic of Tanzania</p>
                <h2 className="text-yellow-400 font-bold">Ministry of Energy</h2>
              </div>
              <div className="flex items-center space-x-4"> </div>
            </div>
          </div>
        </div>


        {/* Main Hero Content */}
        <div className="bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 lg:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white">
                  <Globe className="h-3 w-3 mr-1" />
                  Tanzania Energy Data Portal
                </Badge>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-green-700 to-green-600 dark:from-green-500 dark:to-green-400 bg-clip-text text-transparent">
                    National Energy
                  </span>
                  <span className="block bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-400 dark:to-yellow-300 bg-clip-text text-transparent">
                    Information Managment System
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Empowering Tanzania's energy sector with comprehensive data management,
                  analytics, and real-time insights for sustainable development.
                </p>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search energy data, reports, or institutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-green-200 dark:border-green-700 focus:border-green-500 dark:focus:border-green-400"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white">
                    Search
                  </Button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/public">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white group">
                    <Globe className="mr-2 h-5 w-5" />
                    Explore Public Data
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-50 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-900/20">
                    <Users className="mr-2 h-5 w-5" />
                    Access Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Leadership Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-800 dark:to-green-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ministry Leadership
            </h2>
            <p className="text-lg text-green-100 dark:text-green-200 max-w-2xl mx-auto">
              Dedicated to advancing Tanzania's energy sector through strategic leadership and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ministryLeadership.map((leader, index) => (
              <Card key={index} className="bg-white/10 dark:bg-black/20 backdrop-blur-sm border-white/20 dark:border-white/10 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg">{leader.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-3">{leader.title}</p>
                    <Link to={leader.profileLink} className="inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium">
                      View Profile
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ministry Vision/Mission Card */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-white/10 dark:bg-black/20 backdrop-blur-sm border-white/20 dark:border-white/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-green-100 dark:text-green-200 text-lg mb-6">
                  To be a leading institution in ensuring sustainable energy supply for social and economic development of Tanzania
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge className="bg-yellow-500 text-green-900 dark:bg-yellow-400 dark:text-green-900">Sustainable Energy</Badge>
                  <Badge className="bg-yellow-500 text-green-900 dark:bg-yellow-400 dark:text-green-900">Economic Growth</Badge>
                  <Badge className="bg-yellow-500 text-green-900 dark:bg-yellow-400 dark:text-green-900">Innovation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Energy Statistics - Updated Colors */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
              Real-Time Energy Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Live data from across Tanzania's energy sector, updated in real-time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {energyStats.map((stat, index) => (
              <Card key={index} className="border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg ${index % 2 === 0
                        ? 'bg-green-100 dark:bg-green-900/30'
                        : 'bg-yellow-100 dark:bg-yellow-900/30'
                      }`}>
                      <div className={
                        index % 2 === 0
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-yellow-600 dark:text-yellow-400'
                      }>
                        {stat.icon}
                      </div>
                    </div>
                    <Badge
                      variant={stat.trend === 'up' ? 'default' : 'secondary'}
                      className={stat.trend === 'up' ? 'bg-green-600 dark:bg-green-700' : 'bg-gray-500 dark:bg-gray-600'}
                    >
                      {stat.trendValue}
                    </Badge>
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{stat.title}</h3>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                    {stat.value}
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">{stat.unit}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Public Access Section - Updated Colors */}
      <section className="py-16 bg-yellow-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="mb-4 bg-yellow-500 text-green-900 dark:bg-yellow-400 dark:text-green-900">
                <Globe className="h-3 w-3 mr-1" />
                Open Data Initiative
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
                Public Energy Data Access
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Access Tanzania's energy data without login. Explore interactive charts,
                download reports, and gain insights into our national energy landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Interactive Charts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Visualize energy trends and consumption patterns</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                  <Database className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Download Reports</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Export data in PDF and CSV formats</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Gauge className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Real-time Insights</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Access up-to-date energy sector data</p>
              </div>
            </div>

            <Link to="/public">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white group">
                <Globe className="mr-2 h-5 w-5" />
                Access Public Data
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* User Role Cards - Updated with Ministry Colors */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700 dark:text-green-400">
              Access Portal by Role
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your role to access the appropriate features and functionalities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "System Administrators",
                description: "Full system access and management capabilities",
                features: ["User Management", "System Settings", "Data Validation", "Reports"],
                icon: <Shield className="h-8 w-8" />,
                href: "/login",
                color: "green"
              },
              {
                title: "Data Providers",
                description: "Submit and manage energy data from institutions",
                features: ["Data Entry", "Upload Templates", "Track Submissions", "Export Data"],
                icon: <Database className="h-8 w-8" />,
                href: "/login",
                color: "yellow"
              },
              {
                title: "Senior Officials",
                description: "Access reports and insights for decision making",
                features: ["Custom Reports", "Data Analytics", "Trend Analysis", "Dashboard"],
                icon: <BarChart3 className="h-8 w-8" />,
                href: "/login",
                color: "green"
              },
              {
                title: "Researchers & Analysts",
                description: "Analyze energy data and generate insights",
                features: ["Data Analysis", "Research Tools", "Visualizations", "Export Data"],
                icon: <TrendingUp className="h-8 w-8" />,
                href: "/login",
                color: "yellow"
              }
            ].map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className={`mb-4 p-3 rounded-lg inline-block ${role.color === 'green'
                      ? 'bg-green-100 dark:bg-green-900/30'
                      : 'bg-yellow-100 dark:bg-yellow-900/30'
                    }`}>
                    <div className={
                      role.color === 'green'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-yellow-600 dark:text-yellow-400'
                    }>
                      {role.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{role.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{role.description}</p>
                  <ul className="space-y-2 mb-6">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={role.href}>
                    <Button
                      variant="outline"
                      className={`w-full ${role.color === 'green'
                          ? 'border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20'
                          : 'border-yellow-600 text-yellow-700 hover:bg-yellow-50 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-900/20'
                        }`}
                    >
                      Access Portal
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Index;
