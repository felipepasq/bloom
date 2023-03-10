import * as S from './styles'
import { formatImageUrl } from '../../utils'
import SmallStar from '../../assets/star_small.svg'
import SmallStarFill from '../../assets/star_fill_small.svg'
import { Book } from '../../types'
import { useView } from '../../context/ViewContext'
import { useFavorites } from '../../context/FavoritesContext'

type BookCardProps = {
  book: Book
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { favorites, addToFavorites, removeFavorite } = useFavorites()

  const { viewType } = useView()
  const isFavorite = favorites.find((favorite) => favorite.title === book.title)

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(book.title)
    } else {
      addToFavorites(book)
    }
  }

  return (
    <S.Container viewType={viewType}>
      <S.ImageContainer viewType={viewType}>
        <img src={formatImageUrl(book.book_image)}></img>
      </S.ImageContainer>
      <S.BookInfoContainer viewType={viewType}>
        <S.BookTitleContainer viewType={viewType}>
          <h3>{book.title}</h3>
          <div>
            <span>{book.contributor}</span>
            <img
              src={isFavorite ? SmallStarFill : SmallStar}
              alt=""
              onClick={handleClick}
            />
          </div>
        </S.BookTitleContainer>
        <p className="book-description">{book.description}</p>
        <p className="book-publisher">{book.publisher}</p>
        <p>{book.rank}</p>
        <S.PurchaseButton viewType={viewType}>
          Compre por
          {book.price}
        </S.PurchaseButton>
      </S.BookInfoContainer>
    </S.Container>
  )
}

export default BookCard
