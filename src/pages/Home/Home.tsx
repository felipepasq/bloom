import ViewOptionsBar from '../../components/ViewOptionsBar'
import Pagination from '../../components/Pagination'
import CategoryCard from '../../components/CategoryCard'
import * as S from './styles'
import { useEffect, useState } from 'react'

const Home = () => {
  const [viewType, setViewType] = useState<'list' | 'grid'>('list')
  const [numberOfItens, setNumberOfItens] = useState(5)
  const [categories, setCategories] = useState()

  useEffect(() => {}, [])

  return (
    <>
      <ViewOptionsBar
        barText="Gêneros"
        viewType={viewType}
        setViewType={setViewType}
      />
      <S.Main>
        <S.BookList viewType={viewType}>
          <CategoryCard
            categoryTitle="Combined Print & E-Book Fiction"
            viewType={viewType}
          />
          <CategoryCard
            categoryTitle="Combined Print & E-Book Fiction"
            viewType={viewType}
          />
          <CategoryCard
            categoryTitle="Combined Print & E-Book Fiction"
            viewType={viewType}
          />
          <CategoryCard
            categoryTitle="Combined Print & E-Book Fiction"
            viewType={viewType}
          />
          <CategoryCard
            categoryTitle="Combined Print & E-Book Fiction"
            viewType={viewType}
          />
        </S.BookList>
        <Pagination totalPages={6} />
      </S.Main>
    </>
  )
}

export default Home
