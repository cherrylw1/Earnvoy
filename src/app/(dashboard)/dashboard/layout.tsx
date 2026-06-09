import { redirect } from 'next/navigation'

import { PageTitle } from '@/components/dashboard/page-title'
import { SidebarNav } from '@/components/dashboard/sidebar-nav'
import { SignOutButton } from '@/components/dashboard/sign-out-button'
import { Avatar } from '@/components/ui'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const userEmail = user.email ?? 'User'

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <aside className="flex h-full w-60 flex-col border-r border-edge bg-surface">
        <div className="p-5">
          <span className="mr-2 inline-block h-6 w-6 align-middle rounded-md bg-amber" />
          <span className="align-middle font-serif text-lg font-normal text-cream">
            Earnvoy
          </span>
        </div>
        <SidebarNav />
        <div className="mt-auto border-t border-edge p-4">
          <p className="mb-2 truncate text-xs text-mist">{userEmail}</p>
          <SignOutButton />
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-background">
        <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-edge bg-background/95 px-8 backdrop-blur-sm">
          <PageTitle />
          <Avatar name={userEmail} size="md" />
        </div>
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
