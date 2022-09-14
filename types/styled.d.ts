import "styled-components"

declare module "styled-components" {
  interface IThemeColors {
    primary: string
    secondary: string
    tertiary: string
  }

  export interface DefaultTheme {
    white: string
    bg: string
    text: string
    colors: IThemeColors
  }
}
