import { ReactNode } from "react"

interface BlockProps {
  children: ReactNode
  className?: string
}

export default function Block({ children, className = "" }: BlockProps) {
  return (
    <div className={`bg-surface border border-line rounded-lg ${className}`}>
      {children}
    </div>
  )
}




