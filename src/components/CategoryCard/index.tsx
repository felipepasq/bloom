import * as S from './styles'

type CategoryCardProps = {
  categoryTitle: string
  viewType: 'list' | 'grid'
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryTitle,
  viewType
}) => {
  return (
    <S.Container viewType={viewType}>
      <a>{categoryTitle}</a>
      <span>Atualizada em 00/00/00</span>
      <p>Última publicação: 00/00/00</p>
      <p>Publicação mais antiga: 00/00/00</p>
    </S.Container>
  )
}

export default CategoryCard
