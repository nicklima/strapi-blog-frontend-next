interface ITheme {
  white: string
  bg: string
  text: string
  colors: {
    primary: string
    secondary: string
    tertiary: string
  }
}

export const theme: ITheme = {
  white: "#fff",
  bg: "#1e1d32",
  text: "#fff",
  colors: {
    primary: "#292845",
    secondary: "#9692ff",
    tertiary: "#c2d4f8",
  },
}
