"use client"

import { useEffect, useState, type RefObject } from "react"

interface UseIntersectionObserverProps {
  ref: RefObject<Element>
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver({
  ref,
  threshold = 0.1,
  rootMargin = "0px",
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
        threshold,
      },
    )

    const element = ref.current

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [ref, rootMargin, threshold])

  return isIntersecting
}
