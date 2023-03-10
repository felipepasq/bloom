import * as S from './styles'
import { Overlay } from '../Overlay/styles'
import FavoriteStar from '../../assets/star_fill_small.svg'
import { useFavorites } from '../../context/FavoritesContext'
import { formatImageUrl } from '../../utils'

type FavoritesBarProps = {
  isActive: boolean
}

const FavoritesBar: React.FC<FavoritesBarProps> = ({ isActive }) => {
  const { favorites, removeFavorite } = useFavorites()

  const handleClick = (bookTitle: string) => {
    removeFavorite(bookTitle)
  }

  return (
    <>
      <Overlay isActive={isActive} />
      <S.Container isActive={isActive}>
        <h2>Favoritos</h2>
        <S.FavoritesList>
          {!favorites ? (
            <S.NoResultsText>
              Você não adicionou nenhum favorito
            </S.NoResultsText>
          ) : (
            favorites?.map((favorite) => {
              return (
                <S.FavoriteContainer key={favorite.title}>
                  <img
                    src={formatImageUrl(favorite.book_image)}
                    alt="Imagem do livro"
                  />
                  <S.FavoriteInfoContainer>
                    <S.FavoriteTitleContainer>
                      <h3>{favorite.title}</h3>
                    </S.FavoriteTitleContainer>
                    <div>
                      <span>{favorite.contributor}</span>
                      <img
                        src={FavoriteStar}
                        alt="Estrela de favoritos"
                        onClick={() => handleClick(favorite.title)}
                      />
                    </div>
                  </S.FavoriteInfoContainer>
                </S.FavoriteContainer>
              )
            })
          )}
        </S.FavoritesList>
      </S.Container>
    </>
  )
}

export default FavoritesBar
