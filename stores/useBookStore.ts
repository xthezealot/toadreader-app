import { create } from "zustand"

export interface Book {
  id: string
  title: string
  coverImage: string
}

interface BookStoreState {
  searchQuery: string
  books: Book[]
  setSearchQuery: (query: string) => void
}

const useBookStore = create<BookStoreState>((set) => ({
  searchQuery: "",
  books: [
    // Sample data
    { id: "1", title: "The Great Gatsby", coverImage: "https://picsum.photos/200/320?random=1" },
    { id: "2", title: "1984", coverImage: "https://picsum.photos/200/320?random=2" },
    { id: "3", title: "To Kill a Mockingbird", coverImage: "https://picsum.photos/200/320?random=3" },
    { id: "4", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=4" },
    { id: "5", title: "Pride and Prejudice", coverImage: "https://picsum.photos/200/320?random=5" },
    { id: "6", title: "The Lord of the Rings", coverImage: "https://picsum.photos/200/320?random=6" },
    { id: "7", title: "The Alchemist", coverImage: "https://picsum.photos/200/320?random=7" },
    { id: "8", title: "The Hobbit", coverImage: "https://picsum.photos/200/320?random=8" },
    { id: "9", title: "Da Code", coverImage: "https://picsum.photos/200/320?random=9" },
    { id: "10", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=10" },
    { id: "11", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=11" },
    { id: "12", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=12" },
    { id: "13", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=13" },
    { id: "14", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=14" },
    { id: "15", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=15" },
    { id: "16", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=16" },
    { id: "17", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=17" },
    { id: "18", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=18" },
    { id: "19", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=19" },
    { id: "20", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=20" },
    { id: "21", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=21" },
    { id: "22", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=22" },
    { id: "23", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=23" },
    { id: "24", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=24" },
    { id: "25", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=25" },
    { id: "26", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=26" },
    { id: "27", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=27" },
    { id: "28", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=28" },
    { id: "29", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=29" },
    { id: "30", title: "The Catcher in the Rye", coverImage: "https://picsum.photos/200/320?random=30" },
  ],
  setSearchQuery: (query) => set({ searchQuery: query }),
}))

export default useBookStore
