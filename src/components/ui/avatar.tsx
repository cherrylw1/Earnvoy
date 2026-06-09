import { cn } from '@/lib/utils'

const sizeClasses = {
  sm: 'h-6 w-6 text-xs',
  md: 'h-8 w-8 text-xs',
  lg: 'h-10 w-10 text-sm',
}

export interface AvatarProps {
  src?: string
  name: string
  size?: keyof typeof sizeClasses
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Avatar({ src, name, size = 'md' }: AvatarProps) {
  const className = cn(
    'flex items-center justify-center rounded-full',
    sizeClasses[size]
  )

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={cn(className, 'object-cover')}
      />
    )
  }

  return (
    <div
      className={cn(
        className,
        'border border-edge bg-surface font-medium text-mist'
      )}
    >
      {getInitials(name)}
    </div>
  )
}

export { Avatar }
