import React, { useEffect, useRef, useState } from 'react'

export default function Slider() {
  const [width, setWidth] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const measure = () => {
      setWidth(sectionRef.current?.offsetWidth || 0)
    }
    measure()
    window.addEventListener('resize', measure)

    return () => {
      window.removeEventListener('resize', measure)
    }
  })
  return (
    <div>
      <section ref={sectionRef} style={{ background: 'red' }}>
        Content{' '}
      </section>
      {width > 300 && <div style={{ background: 'yellow' }}>Please resize screen smaller</div>}
    </div>
  )
}
