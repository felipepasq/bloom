import ViewOptionsBar from '../../components/ViewOptionsBar'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useView } from '../../context/ViewContext'
import * as S from './styles'
import BookCard from '../../components/BookCard'
import Header from '../../components/Header'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { generateRandomPrice, getCategoryFromURL } from '../../utils'
import Pagination from '../../components/Pagination'
import { Book } from '../../types'
const BooksPage: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [allBooks, setAllBooks] = useState<Book[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(
    Math.ceil(allBooks.length / itemsPerPage)
  )
  const [search, setSearch] = useState('')
  const location = useLocation()
  const { viewType } = useView()
  const categoryName = location.state.categoryName
  const categoryCode = getCategoryFromURL(location.pathname)

  const fetchBooks = async () => {
    try {
      const response = await api.getBookByCategory(categoryCode)
      const data = response.data.results.books
      const booksWithPrice = data.map((book: Book) => {
        if (book.price === '0.00') {
          return {
            ...book,
            price: ` R$${generateRandomPrice()},90`
          }
        } else {
          return book
        }
      })
      setAllBooks(booksWithPrice)
    } catch (error) {
      toast('Ocorreu um erro ao buscar os livros !')
    }
  }

  const handlePagination = (
    items: Book[],
    currentPage: number,
    itemsPerPage: number
  ) => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = items.slice(startIndex, endIndex)
    return currentItems
  }
  const handleSearch = () => {
    const regex = new RegExp(`^${search.trim()}`, 'i')
    const itemsFound =
      search.length > 0 ? allBooks.filter((book) => regex.test(book.title)) : []
    return itemsFound
  }

  const items = handlePagination(allBooks, currentPage, itemsPerPage)
  const filteredBooks = handleSearch()

  const filteredItems = handlePagination(
    filteredBooks,
    currentPage,
    itemsPerPage
  )

  const handleTotalPages = () => {
    const totalPages =
      search.length > 0
        ? Math.ceil(filteredBooks.length / itemsPerPage)
        : Math.ceil(allBooks.length / itemsPerPage)

    setTotalPages(totalPages)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  useEffect(() => {
    handleTotalPages()
  }, [search, itemsPerPage])

  return (
    <>
      <Header setSearch={setSearch} />
      <ViewOptionsBar
        barText={categoryName}
        setItemsPerPage={setItemsPerPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <S.Main>
        <S.BooksList viewType={viewType}>
          {search.length > 0
            ? filteredItems.map((book: Book) => {
                return <BookCard key={book.title} book={book} />
              })
            : items.map((book: Book) => {
                return <BookCard key={book.title} book={book} />
              })}
        </S.BooksList>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </S.Main>
    </>
  )
}

export default BooksPage
