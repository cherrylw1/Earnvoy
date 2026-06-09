import { GitBranch } from 'lucide-react'

import { EmptyState } from '@/components/ui'

export default function PipelinePage() {
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-cream">Pipeline</h2>
        <p className="mt-0.5 text-sm text-mist">
          Track referrals through the sales process
        </p>
      </div>
      <EmptyState
        icon={<GitBranch className="h-10 w-10" />}
        title="Pipeline is empty"
        description="Referrals from your partners will appear here as they progress"
      />
    </div>
  )
}
