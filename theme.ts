import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native"

export type CustomThemeType = Theme & {
  colors: Theme["colors"] & {}
  margins: {
    screen: number
  }
}

const CommonStyles = {
  margins: {
    screen: 18,
  },
}

export const CustomLightTheme: CustomThemeType = {
  ...DefaultTheme,
  ...CommonStyles,
  colors: {
    ...DefaultTheme.colors,
  },
}

export const CustomDarkTheme: CustomThemeType = {
  ...DarkTheme,
  ...CommonStyles,
  colors: {
    ...DarkTheme.colors,
  },
}
