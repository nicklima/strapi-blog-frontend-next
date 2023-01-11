import { render, RenderOptions } from "@testing-library/react"
import { ReactElement, ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "styles"

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }
