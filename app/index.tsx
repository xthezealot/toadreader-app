import { useTheme } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"
import { BlurView } from "expo-blur"
import { Image } from "expo-image"
import { Link } from "expo-router"
import React, { useState } from "react"
import {
  type LayoutChangeEvent,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import useBookStore, { Book } from "../stores/useBookStore"

export default function Books() {
  const { searchQuery, books, setSearchQuery } = useBookStore()
  const colorScheme = useColorScheme()
  const { colors, margins } = useTheme()
  const windowInsets = useSafeAreaInsets()

  // Header setup
  const [headerHeight, setHeaderHeight] = useState(0) // State to track height

  const handleHeaderLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout
    setHeaderHeight(height)
  }

  // Calculate number of columns based on screen width
  const { width: windowWidth } = useWindowDimensions()
  const minItemWidth = 120 // Minimum width for each grid item
  const usableWidth = windowWidth - margins.screen
  const numColumns = Math.max(1, Math.floor(usableWidth / minItemWidth))
  const itemWidth = usableWidth / numColumns

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const BookItem = ({ item }: { item: Book }) => (
    <Link href={`/book/${item.id}`}>
      <View style={{ padding: margins.screen / 2, paddingBottom: 0 }}>
        <View style={styles.bookCover}>
          <Image
            source={{ uri: item.coverImage }}
            style={[styles.bookCoverImage, { backgroundColor: colors.border }]}
            contentFit="cover"
          />
        </View>
        <Text style={[styles.bookTitle, { color: colors.inputPlaceholder }]} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    </Link>
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Book grid */}
      <FlashList
        data={filteredBooks}
        renderItem={BookItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        estimatedItemSize={itemWidth * 1.6 + 40}
        contentContainerStyle={{
          paddingTop: headerHeight + margins.screen / 2,
          paddingHorizontal: margins.screen / 2,
          paddingBottom: margins.screen * 2,
        }}
      />

      {/* Header */}

      <BlurView
        onLayout={handleHeaderLayout}
        intensity={100}
        style={[styles.header, Platform.OS === "android" && { backgroundColor: colors.backgroundSecondary }]}
        tint={Platform.OS === "android" ? (colorScheme === "dark" ? "dark" : "light") : "default"}
      >
        <TextInput
          style={[
            styles.searchInput,
            {
              backgroundColor: colors.inputBackground,
              marginTop: windowInsets.top + margins.screen / 2,
              marginBottom: margins.screen / 2,
              marginHorizontal: margins.screen,
            },
          ]}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={colors.inputPlaceholder}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </BlurView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    overflow: "hidden",
    zIndex: 9,
  },
  searchInput: {
    borderRadius: 10,
    fontSize: 17,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  bookCover: {
    borderRadius: 8,
    width: "100%",
  },
  bookCoverImage: {
    aspectRatio: 1 / 1.6,
    borderRadius: 8,
    width: "100%",
  },
  bookTitle: {
    fontSize: 12,
    lineHeight: 12,
    marginTop: 4,
    paddingHorizontal: 8,
    textAlign: "center",
  },
})
