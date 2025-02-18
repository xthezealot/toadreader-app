import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native"

export type CustomThemeType = Theme & {
  colors: Theme["colors"] & {
    customColor: string
  }
  margins: {
    small: number
    medium: number
  }
}

export const CustomLightTheme: CustomThemeType = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    customColor: "#ff5733",
  },
  margins: { small: 8, medium: 16 },
}

export const CustomDarkTheme: CustomThemeType = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    customColor: "#33ff57",
  },
  margins: { small: 8, medium: 16 },
}
