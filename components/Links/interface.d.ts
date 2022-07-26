import { ReactNode } from "react"
import { AriaAttributes, DOMAttributes } from "react"

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    alt?: string
  }
}

export interface ILinks {
  children?: ReactNode
  to: string | Object
  alt?: string
  target?: "_blank" | "_self"
}
