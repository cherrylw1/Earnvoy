'use client'

import { usePathname } from 'next/navigation'

const titles: Record<string, string> = {
  '/dashboard/programs': 'Programs',
  '/dashboard/partners': 'Partners',
  '/dashboard/pipeline': 'Pipeline',
  '/dashboard/payouts': 'Payouts',
  '/dashboard/settings': 'Settings',
}

export function PageTitle() {
  const pathname = usePathname()
  const title = titles[pathname] ?? 'Dashboard'

  return <h1 className="text-lg font-semibold text-cream">{title}</h1>
}
