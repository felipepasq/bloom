import * as S from './styles'
import { Category } from '../../types'
import { formatDate } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useView } from '../../context/ViewContext'

type CategoryCardProps = {
  category: Category
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/category/${category.list_name_encoded}`, {
      state: { categoryName: category.display_name }
    })
  }

  const { viewType } = useView()

  return (
    <S.Container viewType={viewType}>
      <S.CategoryTileContainer viewType={viewType}>
        <a onClick={handleClick}>{category.display_name}</a>
        <span>Atualizada em {formatDate(category.newest_published_date)}</span>
      </S.CategoryTileContainer>
      <p>Última publicação: {formatDate(category.newest_published_date)}</p>
      <p>
        Publicação mais antiga: {formatDate(category.oldest_published_date)}
      </p>
    </S.Container>
  )
}

export default CategoryCard
