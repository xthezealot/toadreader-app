import type { CustomThemeType } from "./lib/theme"

declare module "@react-navigation/native" {
  export function useTheme(): CustomThemeType
}
