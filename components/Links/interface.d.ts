import { ReactNode } from "react"

export interface ILinks {
  children?: ReactNode
  to: string | Object
  alt?: string
  target?: "_blank" | "_self"
}
