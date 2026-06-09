import { Plus, Users } from 'lucide-react'

import { Button, EmptyState } from '@/components/ui'

export default function PartnersPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-cream">Partners</h2>
          <p className="mt-0.5 text-sm text-mist">
            View and manage your affiliate partners
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Invite partner
        </Button>
      </div>
      <EmptyState
        icon={<Users className="h-10 w-10" />}
        title="No partners yet"
        description="Invite your first affiliate partner to get started"
      />
    </div>
  )
}
