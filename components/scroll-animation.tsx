"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  direction: "left" | "right"
}

export default function ScrollAnimation({ children, direction }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`${direction === "left" ? "animate-slide-left" : "animate-slide-right"}`}>
      {children}
    </div>
  )
}
