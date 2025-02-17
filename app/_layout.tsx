import "~/global.css"

import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import * as React from "react"
import { Platform } from "react-native"
import { navTheme } from "~/lib/constants"
import { useColorScheme } from "~/lib/useColorScheme"

const lightTheme: Theme = {
  ...DefaultTheme,
  colors: navTheme.light,
}
const darkTheme: Theme = {
  ...DarkTheme,
  colors: navTheme.dark,
}

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from "expo-router"

export default function RootLayout() {
  const hasMounted = React.useRef(false)
  const { isDarkColorScheme } = useColorScheme()
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false)

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return
    }

    if (Platform.OS === "web") {
      // Add the background color to the html element to prevent white background on overscroll
      document.documentElement.classList.add("bg-background")
    }
    setIsColorSchemeLoaded(true)
    hasMounted.current = true
  }, [])

  if (!isColorSchemeLoaded) {
    return null
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? darkTheme : lightTheme}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <Stack />
    </ThemeProvider>
  )
}

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined" ? React.useEffect : React.useLayoutEffect
