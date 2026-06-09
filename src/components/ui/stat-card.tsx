import * as React from 'react'
import { TrendingDown, TrendingUp } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from './card'

export interface StatCardProps {
  label: string
  value: string | number
  change?: {
    value: number
    period?: string
  }
  icon?: React.ReactNode
  loading?: boolean
}

function StatCard({ label, value, change, icon, loading = false }: StatCardProps) {
  if (loading) {
    return (
      <Card>
        <div className="flex items-center justify-between gap-4">
          <div className="h-3 w-24 animate-pulse rounded bg-edge" />
          {icon ? <div className="h-4 w-4 animate-pulse rounded bg-edge" /> : null}
        </div>
        <div className="mt-2 h-8 w-28 animate-pulse rounded bg-edge" />
        <div className="mt-3 h-4 w-20 animate-pulse rounded bg-edge" />
      </Card>
    )
  }

  const isPositive = change ? change.value >= 0 : false
  const ChangeIcon = isPositive ? TrendingUp : TrendingDown

  return (
    <Card>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-wider text-mist">{label}</p>
        {icon ? <div className="text-mist">{icon}</div> : null}
      </div>
      <p className="mt-2 font-mono text-2xl font-semibold text-cream">{value}</p>
      {change ? (
        <div className="mt-3 flex items-center gap-1.5">
          <span
            className={cn(
              'inline-flex items-center gap-1 text-sm font-medium',
              isPositive ? 'text-emerald' : 'text-ember'
            )}
          >
            <ChangeIcon className="h-4 w-4" />
            {isPositive ? '+' : ''}
            {change.value}%
          </span>
          {change.period ? (
            <span className="text-xs text-mist">{change.period}</span>
          ) : null}
        </div>
      ) : null}
    </Card>
  )
}

export { StatCard }
