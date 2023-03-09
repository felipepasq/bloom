import ViewOptionsBar from '../../components/ViewOptionsBar'
import Pagination from '../../components/Pagination'
import CategoryCard from '../../components/CategoryCard'
import * as S from './styles'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

type Categories = {
  display_name: string
  list_name_encoded: string
  newest_published_date: string
  oldest_published_date: string
  updated: string
}

const Home = () => {
  const [viewType, setViewType] = useState<'list' | 'grid'>('list')
  const [allCategories, setAllCategories] = useState<Categories[]>([])
  const [itemsPerPage, setItensPerPage] = useState(5)
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

  const handlePagination = (items: Categories[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = items.slice(startIndex, endIndex)
    return currentItems
  }

  const items = handlePagination(allCategories)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <>
      <ViewOptionsBar
        barText="Gêneros"
        viewType={viewType}
        setViewType={setViewType}
        setItensPerPage={setItensPerPage}
      />
      <S.Main>
        <S.CategoriesList viewType={viewType}>
          {items.map((category) => {
            return (
              <CategoryCard
                key={category.list_name_encoded}
                categoryTitle={category.display_name}
                viewType={viewType}
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
