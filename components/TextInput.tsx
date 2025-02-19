import { Ionicons } from "@expo/vector-icons"
import { useTheme } from "@react-navigation/native"
import { TextInput as NativeTextInput, type StyleProp, StyleSheet, View, type ViewStyle } from "react-native"

type TextInputProps = {
  style?: StyleProp<ViewStyle>
  iconName?: keyof typeof Ionicons.glyphMap
} & React.ComponentProps<typeof NativeTextInput>

export default function TextInput({ style, iconName, ...textInputProps }: TextInputProps) {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, style, { backgroundColor: colors.inputBackground }]}>
      {iconName && <Ionicons name={iconName} size={20} color={colors.inputPlaceholder} style={styles.icon} />}
      <NativeTextInput
        style={[styles.input, { color: colors.text, paddingLeft: iconName ? 8 : 10 }]}
        {...textInputProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 17,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
})
