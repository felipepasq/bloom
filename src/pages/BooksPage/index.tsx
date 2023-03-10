import ViewOptionsBar from '../../components/ViewOptionsBar'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useView } from '../../context/ViewContext'
import * as S from './styles'
import BookCard from '../../components/BookCard'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { getCategoryFromURL } from '../../utils'
import Pagination from '../../components/Pagination'
import { Book } from '../../types'
const BooksPage: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [allBooks, setAllBooks] = useState<Book[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()
  const { viewType } = useView()
  const totalPages = Math.ceil(allBooks.length / itemsPerPage)
  const categoryName = location.state.categoryName
  const categoryCode = getCategoryFromURL(location.pathname)

  const fetchBooks = async () => {
    try {
      const response = await api.getBookByCategory(categoryCode)
      const data = response.data.results.books
      console.log(data)
      setAllBooks(data)
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

  const items = handlePagination(allBooks, currentPage, itemsPerPage)

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <>
      <ViewOptionsBar
        barText={categoryName}
        setItemsPerPage={setItemsPerPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <S.Main>
        <S.BooksList viewType={viewType}>
          {items.map((book: Book) => {
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
