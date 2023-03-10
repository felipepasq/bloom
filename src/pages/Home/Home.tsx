import ViewOptionsBar from '../../components/ViewOptionsBar'
import Pagination from '../../components/Pagination'
import CategoryCard from '../../components/CategoryCard'
import Header from '../../components/Header'
import * as S from './styles'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { Category } from '../../types'
import { api } from '../../services/api'
import { useView } from '../../context/ViewContext'
import FavoritesBar from '../../components/FavoritesBar'
import { useFavorites } from '../../context/FavoritesContext'
import Loader from '../../components/Loader'

const Home = () => {
  const [allCategories, setAllCategories] = useState<Category[]>([])
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0)
  const { showFavoritesBar } = useFavorites()
  const { viewType } = useView()

  const fetchCategories = async () => {
    try {
      const response = await api.getAllCategories()
      const data = response.data.results
      setAllCategories(data)
      setTotalPages(Math.ceil(data.length / itemsPerPage))
    } catch (error) {
      toast('Ocorreu um erro ao buscar as categorias dos livros !')
    } finally {
      setIsLoading(false)
    }
  }

  const handlePagination = (
    items: Category[],
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
      search.length > 0
        ? allCategories.filter((category) => regex.test(category.display_name))
        : []
    return itemsFound
  }

  const items = handlePagination(allCategories, currentPage, itemsPerPage)
  const filteredCategories = handleSearch()

  const filteredItems = handlePagination(
    filteredCategories,
    currentPage,
    itemsPerPage
  )

  const handleTotalPages = () => {
    const totalPages =
      search.length > 0
        ? Math.ceil(filteredCategories.length / itemsPerPage)
        : Math.ceil(allCategories.length / itemsPerPage)

    setTotalPages(totalPages)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    handleTotalPages()
  }, [search, itemsPerPage])

  return (
    <>
      {showFavoritesBar ? <FavoritesBar isActive={showFavoritesBar} /> : null}
      <Header setSearch={setSearch} />
      <ViewOptionsBar
        barText="Gêneros"
        setItemsPerPage={setItemsPerPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <S.Main>
        {isLoading ? (
          <Loader />
        ) : (
          <S.CategoriesList viewType={viewType}>
            {search.length > 0 ? (
              filteredItems.length > 0 ? (
                filteredItems.map((category: Category) => {
                  return (
                    <CategoryCard
                      key={category.list_name_encoded}
                      category={category}
                    />
                  )
                })
              ) : (
                <S.NotFoundText>Nenhum resultado encontrado</S.NotFoundText>
              )
            ) : (
              items.map((category: Category) => {
                return (
                  <CategoryCard
                    key={category.list_name_encoded}
                    category={category}
                  />
                )
              })
            )}
          </S.CategoriesList>
        )}
        {totalPages > 1 ? (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : null}
      </S.Main>
    </>
  )
}

export default Home
