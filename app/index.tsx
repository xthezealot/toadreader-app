import React, { useState } from "react"
import { Switch, Text, View } from "react-native"

export default function Index() {
  const [checked, setChecked] = useState(false)

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-green-500">Toad Reader</Text>
      <Switch onValueChange={setChecked} value={checked} />
    </View>
  )
}
