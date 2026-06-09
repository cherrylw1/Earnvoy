import * as React from 'react'

export interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
  action?: React.ReactNode
}

function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="px-8 py-16">
      <div className="mb-4 flex justify-center text-mist [&_svg]:h-10 [&_svg]:w-10">
        {icon}
      </div>
      <h3 className="text-center text-lg font-semibold text-cream">{title}</h3>
      <p className="mx-auto mt-2 max-w-sm text-center text-sm text-mist">
        {description}
      </p>
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </div>
  )
}

export { EmptyState }
