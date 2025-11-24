import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        p-8 rounded-3xl bg-card/80 backdrop-blur border border-border
        ${hover ? 'hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  )
}
