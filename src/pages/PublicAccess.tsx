import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { EnergyCard } from "@/components/ui/energy-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Download,
  Filter,
  BarChart3,
  Zap,
  Lightbulb,
  Gauge,
  TrendingUp,
  Calendar,
  Building,
  Globe
} from "lucide-react"

export default function PublicAccess() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSector, setSelectedSector] = useState("all")
  const [selectedTimeRange, setSelectedTimeRange] = useState("1y")

  const energyData = [
    {
      title: "Solar Energy Production",
      value: "1,247",
      unit: "MW",
      trend: "up" as const,
      trendValue: "+18.3%",
      icon: <Lightbulb className="h-4 w-4" />,
      status: "approved" as const
    },
    {
      title: "Hydroelectric Power",
      value: "892",
      unit: "MW", 
      trend: "up" as const,
      trendValue: "+5.7%",
      icon: <Zap className="h-4 w-4" />,
      status: "approved" as const
    },
    {
      title: "Natural Gas Generation",
      value: "654",
      unit: "MW",
      trend: "neutral" as const,
      trendValue: "±2.1%",
      icon: <Gauge className="h-4 w-4" />,
      status: "approved" as const
    },
    {
      title: "Wind Energy Capacity",
      value: "284",
      unit: "MW",
      trend: "up" as const,
      trendValue: "+12.4%",
      icon: <TrendingUp className="h-4 w-4" />,
      status: "approved" as const
    }
  ]

  const sectors = [
    { value: "all", label: "All Sectors" },
    { value: "residential", label: "Residential" },
    { value: "industrial", label: "Industrial" },
    { value: "commercial", label: "Commercial" },
    { value: "transport", label: "Transport" }
  ]

  const timeRanges = [
    { value: "1m", label: "Last Month" },
    { value: "3m", label: "Last 3 Months" },
    { value: "6m", label: "Last 6 Months" },
    { value: "1y", label: "Last Year" },
    { value: "5y", label: "Last 5 Years" }
  ]

  const reports = [
    {
      title: "Annual Energy Report 2023",
      description: "Comprehensive overview of Tanzania's energy sector performance",
      date: "December 2023",
      type: "PDF",
      size: "2.4 MB"
    },
    {
      title: "Renewable Energy Progress Q4",
      description: "Quarterly update on renewable energy initiatives and achievements",
      date: "October 2023",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Energy Consumption by Sector",
      description: "Detailed breakdown of energy usage across different sectors",
      date: "September 2023",
      type: "CSV",
      size: "0.5 MB"
    }
  ]

  return (
    <PageLayout>
      {/* Header Section */}
      <section className="bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 glow-button">
              <Globe className="h-3 w-3 mr-1" />
              Open Data Access
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
              Public Energy Data Portal
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore Tanzania's energy data, download reports, and gain insights into our national energy landscape.
              No registration required.
            </p>

            {/* Search and Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="relative md:col-span-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search data..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedSector} onValueChange={setSelectedSector}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sector" />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map((sector) => (
                    <SelectItem key={sector.value} value={sector.value}>
                      {sector.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Time range" />
                </SelectTrigger>
                <SelectContent>
                  {timeRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Data Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 neon-text">Current Energy Production</h2>
            <p className="text-muted-foreground">Real-time data from across Tanzania's energy infrastructure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {energyData.map((data, index) => (
              <EnergyCard
                key={index}
                title={data.title}
                value={data.value}
                unit={data.unit}
                trend={data.trend}
                trendValue={data.trendValue}
                icon={data.icon}
                status={data.status}
                glowEffect={index === 0}
              />
            ))}
          </div>

          {/* Interactive Data Visualization */}
          <Card className="energy-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="neon-text">Energy Trends Visualization</CardTitle>
                  <CardDescription>Interactive charts showing energy production and consumption patterns</CardDescription>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/20 rounded-lg p-8 text-center">
                <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-lg font-semibold mb-2">Interactive Charts Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  Dynamic visualizations will be available here showing energy trends, 
                  consumption patterns, and sector-wise breakdowns.
                </p>
                <Badge variant="secondary">Chart Placeholder</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Explorer */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 neon-text">Data Explorer</h2>
            <p className="text-muted-foreground">Browse and filter energy data by different categories</p>
          </div>

          <Tabs defaultValue="production" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="production">Production</TabsTrigger>
              <TabsTrigger value="consumption">Consumption</TabsTrigger>
              <TabsTrigger value="renewable">Renewable</TabsTrigger>
              <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
            </TabsList>

            <TabsContent value="production" className="mt-6">
              <Card className="energy-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Energy Production Data
                  </CardTitle>
                  <CardDescription>
                    Total energy production across all sources and regions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-primary">2,847 MW</div>
                        <div className="text-sm text-muted-foreground">Total Capacity</div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-approved">68.3%</div>
                        <div className="text-sm text-muted-foreground">Renewable Share</div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-pending">1,247 MW</div>
                        <div className="text-sm text-muted-foreground">Peak Demand</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consumption" className="mt-6">
              <Card className="energy-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gauge className="h-5 w-5" />
                    Energy Consumption Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Gauge className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
                    <p className="text-muted-foreground">Consumption data visualization will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="renewable" className="mt-6">
              <Card className="energy-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Renewable Energy Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
                    <p className="text-muted-foreground">Renewable energy breakdown will be shown here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="efficiency" className="mt-6">
              <Card className="energy-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Energy Efficiency Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
                    <p className="text-muted-foreground">Efficiency trends and metrics will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 neon-text">Download Reports</h2>
            <p className="text-muted-foreground">Access official energy reports and datasets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="energy-card group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg neon-text">{report.title}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{report.date}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{report.type}</Badge>
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{report.size}</span>
                    <Button size="sm" className="glow-button group">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}