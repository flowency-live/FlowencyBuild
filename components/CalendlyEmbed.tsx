'use client'

import { useEffect } from 'react'

interface CalendlyEmbedProps {
  url?: string
  className?: string
  minHeight?: string
}

export function CalendlyEmbed({
  url = 'https://calendly.com/flow-amplified?hide_gdpr_banner=1&hide_event_type_details=0',
  className = '',
  minHeight = '700px',
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="calendly"]')
    if (existingScript) {
      return
    }

    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => {
      console.log('Calendly inline widget script loaded')
    }
    script.onerror = () => {
      console.error('Failed to load Calendly inline widget script')
    }
    document.body.appendChild(script)

    // Load Calendly CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: '320px', height: minHeight }}
    />
  )
}
