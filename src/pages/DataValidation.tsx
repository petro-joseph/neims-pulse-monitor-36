
import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Calendar,
  Zap,
  Building,
  Plus,
  Eye,
  FileText
} from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

const DataValidation = () => {
  const { user } = useAuth()
  const [selectedSubmission, setSelectedSubmission] = useState<string | null>(null)

  // Mock data for validation
  const pendingSubmissions = [
    {
      id: "#01817",
      title: "Energy Data Submission",
      provider: "TANESCO",
      reportDate: "June 28, 2024",
      energySource: "Hydroelectric",
      sector: "Electricity Generation",
      dataValue: "1,250 MW",
      unit: "Megawatts",
      status: "pending",
      submittedBy: "Eng. Michael Juma",
      submissionDate: "2024-07-01"
    }
  ]

  const quickLinks = [
    {
      title: "Data Waiting Validation",
      icon: <AlertTriangle className="h-5 w-5" />,
      count: 7,
      action: "validate-data"
    },
    {
      title: "New Data Entry",
      icon: <Plus className="h-5 w-5" />,
      action: "new-entry"
    }
  ]

  const handleValidate = (id: string, action: 'approve' | 'disapprove') => {
    console.log(`${action} submission ${id}`)
    // Handle validation logic here
  }

  if (!user || !['admin', 'senior_official', 'data_provider'].includes(user.role)) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <AlertTriangle className="mx-auto h-12 w-12 text-destructive mb-4" />
            <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
            <p className="text-muted-foreground">You don't have permission to access data validation.</p>
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
          <h1 className="text-3xl font-bold neon-text mb-2">User Data Validation/Approval</h1>
          <p className="text-muted-foreground">TANESCO User - Data Review & Approval</p>
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
                      <div className="text-left flex-1">
                        <div className="font-medium">{link.title}</div>
                        {link.count && (
                          <Badge variant="secondary" className="mt-1">
                            {link.count}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {pendingSubmissions.map((submission) => (
              <Card key={submission.id} className="energy-card mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="neon-text">{submission.title} {submission.id}</CardTitle>
                      <CardDescription>Submitted by {submission.submittedBy} from {submission.provider}</CardDescription>
                    </div>
                    <Badge variant="secondary">Pending Review</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Report Date:</strong> {submission.reportDate}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Energy Source:</strong> {submission.energySource}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          <strong>Sector:</strong> {submission.sector}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm font-medium">Data Value:</span>
                        <div className="text-2xl font-bold neon-text">{submission.dataValue}</div>
                        <div className="text-sm text-muted-foreground">Unit: {submission.unit}</div>
                      </div>
                    </div>
                  </div>

                  {/* Validation Progress */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Validation Status</h4>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-approved" />
                        <span className="text-sm">Submit</span>
                      </div>
                      <div className="flex-1 h-px bg-border"></div>
                      <div className="flex items-center space-x-2">
                        <div className="h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-sm">Validate</span>
                      </div>
                      <div className="flex-1 h-px bg-border"></div>
                      <div className="flex items-center space-x-2">
                        <div className="h-5 w-5 rounded-full border-2 border-muted"></div>
                        <span className="text-sm text-muted-foreground">Approved</span>
                      </div>
                      <div className="flex-1 h-px bg-border"></div>
                      <div className="flex items-center space-x-2">
                        <div className="h-5 w-5 rounded-full border-2 border-muted"></div>
                        <span className="text-sm text-muted-foreground">Reported</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4">
                    <Button 
                      onClick={() => handleValidate(submission.id, 'disapprove')}
                      variant="destructive"
                      className="glow-button"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Disapprove
                    </Button>
                    <Button 
                      onClick={() => handleValidate(submission.id, 'approve')}
                      className="glow-button"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Validate
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DataValidation
