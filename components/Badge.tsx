import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface BadgeProps {
  children: ReactNode
  icon?: LucideIcon
  className?: string
}

export function Badge({ children, icon: Icon, className = '' }: BadgeProps) {
  return (
    <div
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full
        bg-primary/20 border border-primary/40 text-purple-light
        text-sm font-medium
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </div>
  )
}
