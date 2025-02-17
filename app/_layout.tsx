import "@/global.css"

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import { useColorScheme } from "nativewind"
import * as React from "react"

export default function RootLayout() {
  const { colorScheme } = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Books" }} />
      </Stack>
    </ThemeProvider>
  )
}
