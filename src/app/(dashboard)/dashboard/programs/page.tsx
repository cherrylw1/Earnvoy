import { LayoutGrid, Plus } from 'lucide-react'

import { Button, EmptyState } from '@/components/ui'

export default function ProgramsPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-cream">Programs</h2>
          <p className="mt-0.5 text-sm text-mist">
            Manage your affiliate programs
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Create program
        </Button>
      </div>
      <EmptyState
        icon={<LayoutGrid className="h-10 w-10" />}
        title="No programs yet"
        description="Create your first affiliate program and start growing through partners"
        action={<Button>Create program</Button>}
      />
    </div>
  )
}
