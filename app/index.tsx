import { FlashList } from "@shopify/flash-list"
import React, { useCallback, useMemo } from "react"
import { Image, Text, TextInput, useWindowDimensions, View } from "react-native"
import { create } from "zustand"

interface Book {
  id: string
  title: string
  coverUrl: string
}

interface SearchStore {
  query: string
  setQuery: (query: string) => void
}

const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
}))

// Mock data - replace with actual data fetching
const BOOKS: Book[] = Array.from({ length: 1000 }, (_, i) => ({
  id: `book-${i}`,
  title: `Book ${i + 1}`,
  coverUrl: `https://picsum.photos/seed/${i}/400/640`,
}))

function BookCard({ title, coverUrl }: Omit<Book, "id">) {
  return (
    <View className="w-full p-2">
      <Image source={{ uri: coverUrl }} className="aspect-book-cover w-full rounded-lg" />
      <Text numberOfLines={2} className="mt-2 text-center text-sm font-medium dark:text-white">
        {title}
      </Text>
    </View>
  )
}

export default function Index() {
  const { width } = useWindowDimensions()
  const query = useSearchStore((state) => state.query)
  const setQuery = useSearchStore((state) => state.setQuery)

  const numColumns = Math.max(2, Math.floor(width / 130))
  const itemWidth = width / numColumns

  const filteredBooks = useMemo(() => {
    const normalizedQuery = query.toLowerCase()
    return BOOKS.filter((book) => book.title.toLowerCase().includes(normalizedQuery))
  }, [query])

  const renderItem = useCallback(
    ({ item }: { item: Book }) => (
      <View style={{ width: itemWidth }}>
        <BookCard title={item.title} coverUrl={item.coverUrl} />
      </View>
    ),
    [itemWidth],
  )

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <View className="py-2">
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search books"
          className="rounded-lg bg-gray-100 px-4 py-2 text-base dark:bg-zinc-800 dark:text-white"
        />
      </View>
      <FlashList
        data={filteredBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        estimatedItemSize={300}
        className="flex-1"
      />
    </View>
  )
}
