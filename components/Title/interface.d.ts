import { ReactNode } from "react"

interface ITitle {
  children: ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
