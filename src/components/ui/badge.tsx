import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-layer border border-edge text-mist',
        success: 'bg-emerald/10 border border-emerald/20 text-emerald',
        warning: 'bg-amber/10 border border-amber/20 text-amber',
        error: 'bg-ember/10 border border-ember/20 text-ember',
        active: 'bg-[#3B7FE8]/10 border border-[#3B7FE8]/20 text-[#3B7FE8]',
        pending: 'bg-mist/10 border border-mist/20 text-mist',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
