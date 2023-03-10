import ViewOptionsBar from '../../components/ViewOptionsBar'
import Pagination from '../../components/Pagination'
import CategoryCard from '../../components/CategoryCard'
import * as S from './styles'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { Category } from '../../types'
import { api } from '../../services/api'
import { useView } from '../../context/ViewContext'

const Home = () => {
  const { viewType } = useView()
  const [allCategories, setAllCategories] = useState<Category[]>([])
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(allCategories.length / itemsPerPage)

  const fetchCategories = async () => {
    try {
      const response = await api.getAllCategories()
      const data = response.data.results
      setAllCategories(data)
    } catch (error) {
      toast('Ocorreu um erro ao buscar as categorias dos livros !')
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

  const items = handlePagination(allCategories, currentPage, itemsPerPage)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <>
      <ViewOptionsBar
        barText="Gêneros"
        setItemsPerPage={setItemsPerPage}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <S.Main>
        <S.CategoriesList viewType={viewType}>
          {items.map((category: Category) => {
            return (
              <CategoryCard
                key={category.list_name_encoded}
                category={category}
              />
            )
          })}
        </S.CategoriesList>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </S.Main>
    </>
  )
}

export default Home
