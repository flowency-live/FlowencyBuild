import { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  gradient?: 'subtle' | 'hero' | 'radial' | 'none'
  padding?: 'sm' | 'md' | 'lg'
}

export function Section({
  children,
  className = '',
  gradient = 'none',
  padding = 'lg',
}: SectionProps) {
  const gradients = {
    subtle: 'bg-gradient-to-b from-navy via-navy-light to-navy',
    hero: 'bg-gradient-to-b from-navy to-navy-light',
    radial: 'relative overflow-hidden',
    none: 'bg-navy-light',
  }

  const paddings = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  }

  return (
    <section className={`${gradients[gradient]} ${paddings[padding]} ${className}`}>
      {gradient === 'radial' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/10 rounded-full blur-3xl pointer-events-none" />
      )}
      <Container className={gradient === 'radial' ? 'relative z-10' : ''}>
        {children}
      </Container>
    </section>
  )
}
