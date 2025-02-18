import type { CustomThemeType } from "./theme"

declare module "@react-navigation/native" {
  export function useTheme(): CustomThemeType
}
