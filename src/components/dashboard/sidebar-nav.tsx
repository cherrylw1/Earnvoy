'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  GitBranch,
  LayoutGrid,
  Settings,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'

type NavItem = {
  label: string
  href: string
  icon: LucideIcon
}

const workspaceItems: NavItem[] = [
  { label: 'Programs', href: '/dashboard/programs', icon: LayoutGrid },
  { label: 'Partners', href: '/dashboard/partners', icon: Users },
  { label: 'Pipeline', href: '/dashboard/pipeline', icon: GitBranch },
  { label: 'Payouts', href: '/dashboard/payouts', icon: Wallet },
]

const accountItems: NavItem[] = [
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

function SidebarLink({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const Icon = item.icon
  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

  return (
    <Link
      href={item.href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors duration-150',
        isActive
          ? 'border-l-2 border-amber bg-layer pl-[10px] text-cream'
          : 'text-mist hover:bg-layer hover:text-cream'
      )}
    >
      <Icon className="h-4 w-4" />
      {item.label}
    </Link>
  )
}

export function SidebarNav() {
  return (
    <nav className="mt-6 flex-1 px-3">
      <p className="mb-2 px-3 text-[10px] uppercase tracking-widest text-mist">
        WORKSPACE
      </p>
      <div className="space-y-1">
        {workspaceItems.map((item) => (
          <SidebarLink key={item.href} item={item} />
        ))}
      </div>
      <p className="mb-2 mt-6 px-3 text-[10px] uppercase tracking-widest text-mist">
        ACCOUNT
      </p>
      <div className="space-y-1">
        {accountItems.map((item) => (
          <SidebarLink key={item.href} item={item} />
        ))}
      </div>
    </nav>
  )
}
