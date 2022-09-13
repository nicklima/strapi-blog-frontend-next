import "styled-components"

declare module "styled-components" {
  interface ThemeColors {
    primary: string
    secondary: string
    tertiary: string
  }

  export interface DefaultTheme {
    white: string
    bg: string
    text: string
    colors: ThemeColors
  }
}
