import * as S from './styles'
import { formatImageUrl, generateRandomPrice } from '../../utils'
import SmallStar from '../../assets/star_small.svg'
import { Book } from '../../types'
import { useView } from '../../context/ViewContext'

type BookCardProps = {
  book: Book
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { viewType } = useView()
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
            <img src={SmallStar} alt="" />
          </div>
        </S.BookTitleContainer>
        <p className="book-description">{book.description}</p>
        <p className="book-publisher">{book.publisher}</p>
        <p>{book.rank}</p>
        <S.PurchaseButton viewType={viewType}>
          Compre por
          {book.price === '0.00'
            ? ` R$${generateRandomPrice()},90`
            : ` R$${book.price},90`}
        </S.PurchaseButton>
      </S.BookInfoContainer>
    </S.Container>
  )
}

export default BookCard
