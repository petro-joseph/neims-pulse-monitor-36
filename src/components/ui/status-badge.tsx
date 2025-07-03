import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition-all duration-300",
  {
    variants: {
      status: {
        approved: "bg-approved text-approved-foreground ring-approved/20 shadow-sm",
        pending: "bg-pending text-pending-foreground ring-pending/20 shadow-sm",
        rejected: "bg-rejected text-rejected-foreground ring-rejected/20 shadow-sm",
        default: "bg-muted text-muted-foreground ring-border shadow-sm"
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-2 text-base"
      },
      glow: {
        true: "animate-glow-pulse dark:shadow-lg",
        false: ""
      }
    },
    defaultVariants: {
      status: "default",
      size: "md",
      glow: false
    }
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {
  status?: "approved" | "pending" | "rejected" | "default"
}

function StatusBadge({ 
  className, 
  status, 
  size, 
  glow, 
  children, 
  ...props 
}: StatusBadgeProps) {
  return (
    <div
      className={cn(statusBadgeVariants({ status, size, glow }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { StatusBadge, statusBadgeVariants }