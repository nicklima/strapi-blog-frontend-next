interface ITheme {
  bg: string
  text: string
  colors: {
    primary: string
    secondary: string
    tertiary: string
  }
}

export const theme: ITheme = {
  bg: "#1e1d32",
  text: "#fff",
  colors: {
    primary: "#292845",
    secondary: "#3dd0d8",
    tertiary: "#c2d4f8",
  },
}
