import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native"

export type CustomThemeType = Theme & {
  colors: Theme["colors"] & {
    background: string
    backgroundSecondary: string
    inputBackground: string
    inputPlaceholder: string
  }
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
    background: "#fff",
    text: "#000",
    backgroundSecondary: "#f9f9f9",
    inputBackground: "rgba(232,232,237,0.7)",
    inputPlaceholder: "#999",
  },
}

export const CustomDarkTheme: CustomThemeType = {
  ...DarkTheme,
  ...CommonStyles,
  colors: {
    ...DarkTheme.colors,
    background: "#000",
    text: "#fff",
    backgroundSecondary: "#000",
    inputBackground: "rgba(54,54,56,0.7)",
    inputPlaceholder: "rgba(235,235,245,0.5)",
  },
}
