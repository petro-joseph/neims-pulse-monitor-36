import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatusBadge } from "@/components/ui/status-badge"
import {
  Database,
  Upload,
  Save,
  FileText,
  Calendar,
  Building,
  Zap,
  Download,
  CheckCircle,
  Clock,
  AlertTriangle,
  Plus
} from "lucide-react"

export default function DataEntry() {
  const [activeTab, setActiveTab] = useState("manual")
  const [formData, setFormData] = useState({
    dataSource: "",
    sector: "",
    energyType: "",
    value: "",
    unit: "",
    reportingPeriod: "",
    provider: "",
    comments: ""
  })

  // Mock user data
  const user = {
    name: "Eng. Michael Juma",
    role: "Data Provider",
    institution: "Tanzania Electric Supply Company"
  }

  const recentSubmissions = [
    {
      id: "SUB-001",
      title: "Monthly Electricity Production",
      date: "2023-11-30",
      status: "approved",
      value: "847 MW"
    },
    {
      id: "SUB-002", 
      title: "Renewable Energy Capacity",
      date: "2023-11-28",
      status: "pending",
      value: "234 MW"
    },
    {
      id: "SUB-003",
      title: "Energy Consumption Report",
      date: "2023-11-25",
      status: "rejected",
      value: "1,247 MWh"
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitting data:", formData)
  }

  return (
    <PageLayout 
      isLoggedIn={true} 
      userName={user.name} 
      userRole={user.role}
    >
      {/* Header */}
      <section className="bg-muted/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold neon-text">
                Data Entry Portal
              </h1>
              <p className="text-muted-foreground mt-2">
                Submit and manage energy data for {user.institution}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="glow-button">
                <Download className="h-4 w-4 mr-2" />
                Download Template
              </Button>
              <Button className="glow-button">
                <FileText className="h-4 w-4 mr-2" />
                View History
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                <TabsTrigger value="upload">Bulk Upload</TabsTrigger>
                <TabsTrigger value="api">API Integration</TabsTrigger>
              </TabsList>

              <TabsContent value="manual" className="mt-6">
                <Card className="energy-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Manual Data Entry
                    </CardTitle>
                    <CardDescription>
                      Enter energy data manually using the form below
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dataSource">Data Source</Label>
                        <Select onValueChange={(value) => handleInputChange("dataSource", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select data source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="generation">Generation Plant</SelectItem>
                            <SelectItem value="transmission">Transmission Grid</SelectItem>
                            <SelectItem value="distribution">Distribution Network</SelectItem>
                            <SelectItem value="consumption">Consumption Meter</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sector">Sector</Label>
                        <Select onValueChange={(value) => handleInputChange("sector", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sector" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                            <SelectItem value="agriculture">Agriculture</SelectItem>
                            <SelectItem value="transport">Transport</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="energyType">Energy Type</Label>
                        <Select onValueChange={(value) => handleInputChange("energyType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select energy type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="electricity">Electricity</SelectItem>
                            <SelectItem value="solar">Solar</SelectItem>
                            <SelectItem value="hydro">Hydroelectric</SelectItem>
                            <SelectItem value="wind">Wind</SelectItem>
                            <SelectItem value="gas">Natural Gas</SelectItem>
                            <SelectItem value="biomass">Biomass</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reportingPeriod">Reporting Period</Label>
                        <Input
                          id="reportingPeriod"
                          type="month"
                          value={formData.reportingPeriod}
                          onChange={(e) => handleInputChange("reportingPeriod", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="value">Value</Label>
                        <Input
                          id="value"
                          type="number"
                          placeholder="Enter energy value"
                          value={formData.value}
                          onChange={(e) => handleInputChange("value", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="unit">Unit</Label>
                        <Select onValueChange={(value) => handleInputChange("unit", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="MW">MW (Megawatt)</SelectItem>
                            <SelectItem value="MWh">MWh (Megawatt-hour)</SelectItem>
                            <SelectItem value="GW">GW (Gigawatt)</SelectItem>
                            <SelectItem value="GWh">GWh (Gigawatt-hour)</SelectItem>
                            <SelectItem value="kW">kW (Kilowatt)</SelectItem>
                            <SelectItem value="kWh">kWh (Kilowatt-hour)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comments">Comments (Optional)</Label>
                      <Textarea
                        id="comments"
                        placeholder="Add any additional notes or comments about this data submission..."
                        value={formData.comments}
                        onChange={(e) => handleInputChange("comments", e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="flex space-x-4">
                      <Button className="glow-button" onClick={handleSubmit}>
                        <Save className="h-4 w-4 mr-2" />
                        Submit Data
                      </Button>
                      <Button variant="outline" className="glow-button">
                        <FileText className="h-4 w-4 mr-2" />
                        Save as Draft
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="upload" className="mt-6">
                <Card className="energy-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Bulk Data Upload
                    </CardTitle>
                    <CardDescription>
                      Upload multiple data entries using CSV or Excel templates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Upload Data File</h3>
                      <p className="text-muted-foreground mb-4">
                        Drag and drop your file here, or click to browse
                      </p>
                      <div className="space-y-2">
                        <Button className="glow-button">
                          Choose File
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          Supported formats: CSV, Excel (.xlsx)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="api" className="mt-6">
                <Card className="energy-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      API Integration
                    </CardTitle>
                    <CardDescription>
                      Connect your systems directly to NEIMS for automated data submission
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Zap className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
                      <h3 className="text-lg font-semibold mb-2">API Documentation</h3>
                      <p className="text-muted-foreground mb-4">
                        Integrate your systems with NEIMS using our REST API
                      </p>
                      <Button className="glow-button">
                        View API Docs
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Submissions */}
            <Card className="energy-card">
              <CardHeader>
                <CardTitle className="text-lg">Recent Submissions</CardTitle>
                <CardDescription>Your latest data submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSubmissions.map((submission) => (
                    <div key={submission.id} className="p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-sm font-medium">{submission.title}</div>
                        <StatusBadge status={submission.status as any} size="sm">
                          {submission.status}
                        </StatusBadge>
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {submission.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {submission.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="energy-card">
              <CardHeader>
                <CardTitle className="text-lg">Submission Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-approved" />
                      <span className="text-sm">Approved</span>
                    </div>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-pending" />
                      <span className="text-sm">Pending</span>
                    </div>
                    <span className="font-semibold">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-rejected" />
                      <span className="text-sm">Rejected</span>
                    </div>
                    <span className="font-semibold">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help & Resources */}
            <Card className="energy-card">
              <CardHeader>
                <CardTitle className="text-lg">Help & Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start glow-button" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Data Entry Guide
                </Button>
                <Button className="w-full justify-start glow-button" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Templates
                </Button>
                <Button className="w-full justify-start glow-button" variant="outline">
                  <Building className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}