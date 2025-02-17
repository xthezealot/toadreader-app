import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { Text } from "~/components/ui/text"
import "~/global.css"

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Toad Reader</Text>
      <Text className="text-green-500">Toad Reader</Text>
      <StatusBar style="auto" />
    </View>
  )
}
