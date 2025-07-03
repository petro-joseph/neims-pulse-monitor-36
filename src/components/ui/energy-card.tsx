import { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/ui/status-badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface EnergyCardProps {
  title: string
  description?: string
  value: string | number
  unit?: string
  status?: "approved" | "pending" | "rejected"
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  icon?: ReactNode
  className?: string
  interactive?: boolean
  onClick?: () => void
  glowEffect?: boolean
}

export function EnergyCard({
  title,
  description,
  value,
  unit,
  status,
  trend,
  trendValue,
  icon,
  className,
  interactive = true,
  onClick,
  glowEffect = false
}: EnergyCardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-approved" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />
      case "neutral":
        return <Minus className="h-4 w-4 text-muted-foreground" />
      default:
        return null
    }
  }

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-approved"
      case "down":
        return "text-destructive"
      case "neutral":
        return "text-muted-foreground"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <Card
      className={cn(
        "energy-card transition-all duration-300",
        interactive && "cursor-pointer hover:scale-105",
        glowEffect && "animate-glow-pulses",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium neon-text">{title}</CardTitle>
          {description && (
            <CardDescription className="text-xs">{description}</CardDescription>
          )}
        </div>
        {icon && (
          <div className="h-8 w-8 flex items-center justify-center rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-baseline space-x-2">
            <div className="text-2xl font-bold neon-text">{value}</div>
            {unit && <div className="text-sm text-muted-foreground">{unit}</div>}
          </div>
          
          <div className="flex items-center justify-between">
            {trend && trendValue && (
              <div className="flex items-center space-x-1">
                {getTrendIcon()}
                <span className={cn("text-xs font-medium", getTrendColor())}>
                  {trendValue}
                </span>
              </div>
            )}
            
            {status && (
              <StatusBadge status={status} size="sm" glow={glowEffect}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </StatusBadge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
