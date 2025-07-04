
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Target, 
  Database, 
  Users, 
  Shield, 
  TrendingUp, 
  Globe, 
  Building, 
  GraduationCap,
  Heart,
  Lightbulb,
  CheckCircle,
  Calendar,
  Eye
} from "lucide-react"

const About = () => {
  const objectives = [
    {
      title: "Centralized Data Management",
      description: "Aggregating energy data from diverse sources, including traditional (e.g., firewood, agricultural residue), commercial (e.g., petroleum, electricity), and renewable sources (e.g., solar, wind, biogas), as well as consumption patterns across sectors like residential, commercial, transportation, industrial, and agriculture.",
      icon: <Database className="h-5 w-5" />
    },
    {
      title: "Improved Decision-Making",
      description: "Providing stakeholders with accurate, timely, and reliable data to inform energy policies, investments, and strategies.",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Enhanced Collaboration",
      description: "Facilitating seamless data exchange among government agencies, private sector entities, development partners, NGOs, academia, and other stakeholders.",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Sustainability and Scalability",
      description: "Building a robust, adaptable system capable of meeting future energy data needs while ensuring long-term operational efficiency.",
      icon: <Target className="h-5 w-5" />
    }
  ]

  const keyFeatures = [
    {
      title: "Unified Data Platform",
      description: "NEIMS consolidates energy data from national and international sources, including institutions like TANESCO, EWURA, TPDC, NBS, and international organizations such as the IEA and World Bank.",
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "User-Friendly Interface",
      description: "A modular, scalable web portal ensures easy access to data for policymakers, researchers, private sector actors, and the public, with tailored access levels for different user roles.",
      icon: <Eye className="h-5 w-5" />
    },
    {
      title: "Data Validation and Security",
      description: "Robust mechanisms for data validation, cybersecurity (e.g., encryption, access controls), and integration with existing systems ensure data accuracy and protection.",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Capacity Building",
      description: "Comprehensive training programs and user manuals empower stakeholders to effectively operate and manage the system.",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      title: "Interoperability",
      description: "NEIMS is designed to integrate with existing energy data systems, fostering synergy and reducing redundancies.",
      icon: <Database className="h-5 w-5" />
    }
  ]

  const stakeholders = [
    {
      category: "Government Agencies",
      description: "Such as the Ministry of Energy, TANESCO, EWURA, and NBS, which provide and use data for planning and policy-making.",
      icon: <Building className="h-5 w-5" />
    },
    {
      category: "Development Partners",
      description: "Including EU, GIZ, UNDP, and World Bank, offering technical and financial support.",
      icon: <Globe className="h-5 w-5" />
    },
    {
      category: "Private Sector",
      description: "Energy companies and service providers contributing data and insights.",
      icon: <Building className="h-5 w-5" />
    },
    {
      category: "NGOs and Civil Societies",
      description: "Supporting advocacy, capacity building, and awareness.",
      icon: <Heart className="h-5 w-5" />
    },
    {
      category: "Academia and Research Institutions",
      description: "Providing research and training expertise.",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      category: "End Users",
      description: "Communities, institutions, and the public benefiting from accessible energy data.",
      icon: <Users className="h-5 w-5" />
    }
  ]

  const benefits = [
    "Enabling data-driven decision-making for sustainable energy planning",
    "Promoting renewable energy adoption and energy efficiency",
    "Addressing energy poverty through informed policy interventions",
    "Strengthening stakeholder collaboration and data-sharing mechanisms",
    "Supporting Tanzania's national development goals and international energy commitments"
  ]

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 glow-button">
            <Lightbulb className="h-3 w-3 mr-1" />
            About NEIMS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
            National Energy Information 
            <span className="text-primary block">Management System</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The National Energy Information Management System (NEIMS) is a transformative initiative by the Ministry of Energy in Tanzania to create a centralized, integrated platform for managing and sharing energy data across the country. Designed to address the challenges of fragmented, siloed, and inconsistent energy data, NEIMS aims to enhance accessibility, reliability, and usability of energy information to support evidence-based policy formulation, strategic planning, and decision-making in Tanzania's energy sector.
          </p>
        </div>

        {/* Purpose and Objectives */}
        <Card className="mb-8 energy-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl neon-text">
              <Target className="h-6 w-6 text-primary" />
              Purpose and Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              NEIMS serves as a comprehensive repository for energy data, enabling the preparation of National Energy Balances, Energy Demand Forecasting, and Energy Supply Forecasting. Its primary objectives include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border bg-muted/20">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                    {objective.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{objective.title}</h3>
                    <p className="text-sm text-muted-foreground">{objective.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="mb-8 energy-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl neon-text">
              <Database className="h-6 w-6 text-primary" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg border bg-muted/20">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Implementation */}
        <Card className="mb-8 energy-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl neon-text">
              <Calendar className="h-6 w-6 text-primary" />
              Project Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              The development of NEIMS is structured in two phases:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-muted/20">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Phase I
                  </Badge>
                  <span className="text-sm text-muted-foreground">5 months</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Focuses on policy reviews, stakeholder engagement, baseline studies, data source analysis, and the creation of a conceptual design. This phase involves assessing existing systems, identifying gaps, and planning for hardware and software needs.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-muted/20">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Phase II
                  </Badge>
                  <span className="text-sm text-muted-foreground">3 months</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Encompasses detailed system design, procurement, development, testing, commissioning, and capacity building. A web portal will be deployed, and user acceptance testing will ensure functionality before final handover to the Ministry of Energy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stakeholders */}
        <Card className="mb-8 energy-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl neon-text">
              <Users className="h-6 w-6 text-primary" />
              Stakeholders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              NEIMS engages a wide range of stakeholders, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stakeholders.map((stakeholder, index) => (
                <div key={index} className="p-4 rounded-lg border bg-muted/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 rounded bg-primary/10 text-primary">
                      {stakeholder.icon}
                    </div>
                    <h3 className="font-semibold text-sm">{stakeholder.category}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{stakeholder.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-8 energy-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl neon-text">
              <TrendingUp className="h-6 w-6 text-primary" />
              Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              NEIMS will revolutionize Tanzania's energy sector by:
            </p>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card className="mb-8 energy-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl neon-text">
              <Eye className="h-6 w-6 text-primary" />
              Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              By providing a reliable, accessible, and sustainable energy information system, NEIMS aims to empower stakeholders, enhance energy sector efficiency, and drive Tanzania toward a sustainable energy future. The system will serve as a cornerstone for informed policymaking, fostering economic growth, energy security, and environmental sustainability.
            </p>
            <Separator className="my-6" />
            <p className="text-sm text-muted-foreground text-center">
              For more information, contact the Ministry of Energy or explore the NEIMS web portal for updates and resources.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}

export default About
