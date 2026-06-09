import { Settings } from 'lucide-react'

import { EmptyState } from '@/components/ui'

export default function SettingsPage() {
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-cream">Settings</h2>
        <p className="mt-0.5 text-sm text-mist">
          Manage your account and preferences
        </p>
      </div>
      <EmptyState
        icon={<Settings className="h-10 w-10" />}
        title="Settings coming soon"
        description="Account and program settings will be available here"
      />
    </div>
  )
}
