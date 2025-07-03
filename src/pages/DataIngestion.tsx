
import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { 
  Download, 
  Upload, 
  Eye, 
  Check,
  Calendar as CalendarIcon,
  FileText,
  Plus
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/AuthContext"

const DataIngestion = () => {
  const { user } = useAuth()
  const [validityDate, setValidityDate] = useState<Date>()
  const [formData, setFormData] = useState({
    dataSource: "",
    sector: "",
    consumptionSector: "",
    dataValue: "",
    unit: ""
  })

  const quickLinks = [
    {
      title: "Download Template",
      icon: <Download className="h-5 w-5" />,
      description: "Get the standard data entry template",
      action: "download-template"
    },
    {
      title: "Import Data",
      icon: <Upload className="h-5 w-5" />,
      description: "Upload your completed data file",
      action: "import-data"
    },
    {
      title: "My Data",
      icon: <Eye className="h-5 w-5" />,
      description: "View previously submitted data",
      action: "view-data"
    },
    {
      title: "Need Validation",
      icon: <Check className="h-5 w-5" />,
      description: "Items requiring validation review",
      action: "validation-needed"
    }
  ]

  const dataSourceOptions = [
    "Hydroelectric",
    "Solar",
    "Wind", 
    "Natural Gas",
    "Coal",
    "Biomass",
    "Geothermal"
  ]

  const sectorOptions = [
    "Electricity Generation",
    "Oil & Gas",
    "Renewable Energy",
    "Energy Distribution"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting data:", { ...formData, validityDate })
    // Handle form submission
  }

  if (!user || user.role !== 'data_provider') {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <FileText className="mx-auto h-12 w-12 text-destructive mb-4" />
            <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
            <p className="text-muted-foreground">You don't have permission to access data ingestion.</p>
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
          <h1 className="text-3xl font-bold neon-text mb-2">Data Ingestion (Collection) by Provider</h1>
          <p className="text-muted-foreground">EWURA User - Data Entry Portal</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Quick Links Sidebar */}
          <div className="lg:col-span-1">
            <Card className="energy-card">
              <CardHeader>
                <CardTitle className="neon-text">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 glow-button"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {link.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-sm">{link.title}</div>
                        <div className="text-xs text-muted-foreground">{link.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="energy-card">
              <CardHeader>
                <CardTitle className="neon-text">New Data Entry</CardTitle>
                <CardDescription>Submit new energy data for validation and approval</CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Data Source */}
                    <div className="space-y-2">
                      <Label htmlFor="dataSource">Data Source</Label>
                      <Select
                        value={formData.dataSource}
                        onValueChange={(value) => setFormData({...formData, dataSource: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select data source" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover">
                          {dataSourceOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sector */}
                    <div className="space-y-2">
                      <Label htmlFor="sector">Sector</Label>
                      <Select
                        value={formData.sector}
                        onValueChange={(value) => setFormData({...formData, sector: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select sector" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover">
                          {sectorOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Consumption Sector */}
                    <div className="space-y-2">
                      <Label htmlFor="consumptionSector">Consumption Sector</Label>
                      <Select
                        value={formData.consumptionSector}
                        onValueChange={(value) => setFormData({...formData, consumptionSector: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select consumption sector" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover">
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Data Value */}
                    <div className="space-y-2">
                      <Label htmlFor="dataValue">Data Value</Label>
                      <Input
                        id="dataValue"
                        type="number"
                        placeholder="Enter data value"
                        value={formData.dataValue}
                        onChange={(e) => setFormData({...formData, dataValue: e.target.value})}
                      />
                    </div>

                    {/* Unit */}
                    <div className="space-y-2">
                      <Label htmlFor="unit">Unit</Label>
                      <Select
                        value={formData.unit}
                        onValueChange={(value) => setFormData({...formData, unit: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover">
                          <SelectItem value="MW">Megawatts (MW)</SelectItem>
                          <SelectItem value="GWh">Gigawatt Hours (GWh)</SelectItem>
                          <SelectItem value="MWh">Megawatt Hours (MWh)</SelectItem>
                          <SelectItem value="kWh">Kilowatt Hours (kWh)</SelectItem>
                          <SelectItem value="barrels">Barrels</SelectItem>
                          <SelectItem value="tonnes">Tonnes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Validity Date */}
                    <div className="space-y-2">
                      <Label>Validity Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !validityDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {validityDate ? format(validityDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-popover">
                          <Calendar
                            mode="single"
                            selected={validityDate}
                            onSelect={setValidityDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex items-center space-x-4 pt-6">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                    <Button type="submit" className="glow-button">
                      <Plus className="h-4 w-4 mr-2" />
                      Submit Data
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DataIngestion
