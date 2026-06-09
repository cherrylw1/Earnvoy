import { Wallet } from 'lucide-react'

import { EmptyState } from '@/components/ui'

export default function PayoutsPage() {
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-cream">Payouts</h2>
        <p className="mt-0.5 text-sm text-mist">
          Manage commission payouts to partners
        </p>
      </div>
      <EmptyState
        icon={<Wallet className="h-10 w-10" />}
        title="No payouts yet"
        description="Approved commissions ready for payout will appear here"
      />
    </div>
  )
}
