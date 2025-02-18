import { ThemeProvider } from "@react-navigation/native"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useColorScheme } from "react-native"
import { CustomDarkTheme, CustomLightTheme } from "../theme"

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === "dark" ? CustomDarkTheme : CustomLightTheme}>
      <Slot />
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
