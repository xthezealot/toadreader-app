import { FlashList } from "@shopify/flash-list"
import { Image } from "expo-image"
import { Link } from "expo-router"
import React from "react"
import { StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native"
import useBookStore, { Book } from "../stores/useBookStore"

export default function Books() {
  const { searchQuery, books, setSearchQuery } = useBookStore()

  // Calculate number of columns based on screen width
  const { width: windowWidth } = useWindowDimensions()
  const minItemWidth = 120 // Minimum width for each grid item
  const usableWidth = windowWidth - 9 * 2
  const numColumns = Math.max(1, Math.floor(usableWidth / minItemWidth))
  const itemWidth = usableWidth / numColumns

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const BookItem = ({ item }: { item: Book }) => (
    <Link href={`/book/${item.id}`}>
      <View style={styles.bookItem}>
        <View style={styles.cover}>
          <Image source={{ uri: item.coverImage }} style={styles.coverImage} contentFit="cover" />
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </Link>
  )

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#848389"
      />

      <FlashList
        data={filteredBooks}
        renderItem={BookItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        estimatedItemSize={itemWidth * 1.6 + 40}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    backgroundColor: "#eeeef0",
    borderRadius: 10,
    fontSize: 17,
    marginHorizontal: 18,
    marginVertical: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  list: {
    padding: 9,
  },
  bookItem: {
    padding: 9,
    paddingBottom: 0,
  },
  cover: {
    width: "100%",
  },
  coverImage: {
    aspectRatio: 1 / 1.6,
    backgroundColor: "#ddd",
    borderRadius: 8,
    width: "100%",
  },
  title: {
    color: "#848389",
    fontSize: 12,
    lineHeight: 12,
    marginTop: 4,
    paddingHorizontal: 8,
    textAlign: "center",
  },
})
