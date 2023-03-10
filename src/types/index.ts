export type Category = {
  display_name: string
  list_name_encoded: string
  newest_published_date: string
  oldest_published_date: string
  updated: string
}

export type Book = {
  book_image: string
  description: string
  price: string
  title: string
  contributor: string
  rank: number
  publisher: string
}
