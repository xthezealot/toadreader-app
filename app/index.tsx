import { useTheme } from "@react-navigation/native"
import { FlashList } from "@shopify/flash-list"
import { Image } from "expo-image"
import { Link } from "expo-router"
import React from "react"
import { StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native"
import useBookStore, { Book } from "../stores/useBookStore"

export default function Books() {
  const { searchQuery, books, setSearchQuery } = useBookStore()
  const { colors, margins } = useTheme()

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
        <View style={styles.cover}>
          <Image
            source={{ uri: item.coverImage }}
            style={[styles.coverImage, { backgroundColor: colors.border }]}
            contentFit="cover"
          />
        </View>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </Link>
  )

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        style={[styles.searchInput, { backgroundColor: colors.card, color: colors.text }]}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor={colors.text}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />

      <FlashList
        data={filteredBooks}
        renderItem={BookItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        estimatedItemSize={itemWidth * 1.6 + 40}
        contentContainerStyle={{ padding: margins.screen / 2 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    borderRadius: 10,
    fontSize: 17,
    marginHorizontal: 18,
    marginVertical: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  cover: {
    borderRadius: 8,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    width: "100%",
  },
  coverImage: {
    aspectRatio: 1 / 1.6,
    borderRadius: 8,
    width: "100%",
  },
  title: {
    fontSize: 12,
    lineHeight: 12,
    marginTop: 4,
    paddingHorizontal: 8,
    textAlign: "center",
  },
})
