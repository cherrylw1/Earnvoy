import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || props.name

    return (
      <div className="w-full">
        {label ? (
          <label htmlFor={inputId} className="mb-1.5 block text-sm text-mist">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'h-10 w-full rounded-md border border-edge bg-layer px-3 text-sm text-cream transition-all duration-150 placeholder:text-mist focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20',
            error && 'border-ember ring-2 ring-ember/20 focus:border-ember focus:ring-ember/20',
            className
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={error && inputId ? `${inputId}-error` : undefined}
          {...props}
        />
        {error ? (
          <p id={inputId ? `${inputId}-error` : undefined} className="mt-1 text-xs text-ember">
            {error}
          </p>
        ) : null}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
