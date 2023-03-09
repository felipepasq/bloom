import * as S from './styles'
import { Category } from '../../types'
import { formatDate } from '../../utils'
type CategoryCardProps = {
  category: Category
  viewType: 'list' | 'grid'
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, viewType }) => {
  return (
    <S.Container viewType={viewType}>
      <S.CategoryTileContainer viewType={viewType}>
        <a>{category.display_name}</a>
        <span>Atualizada em 00/00/00</span>
      </S.CategoryTileContainer>
      <p>Última publicação: {formatDate(category.newest_published_date)}</p>
      <p>
        Publicação mais antiga: {formatDate(category.oldest_published_date)}
      </p>
    </S.Container>
  )
}

export default CategoryCard
