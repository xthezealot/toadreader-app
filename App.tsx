import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import "./global.css"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Toad Reader</Text>
      <Text className="text-green-500">Toad Reader</Text>
      <StatusBar style="auto" />
    </View>
  )
}
