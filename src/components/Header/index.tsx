import * as S from './styles'
import Logo from '../../assets/logo.svg'
import Star from '../../assets/start.svg'
import SearchBar from '../SearchBar'
import { useFavorites } from '../../context/FavoritesContext'

type HeaderProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<HeaderProps> = ({ setSearch }) => {
  const { setShowFavoritesBar, showFavoritesBar } = useFavorites()

  const handleClick = () => {
    setShowFavoritesBar(!showFavoritesBar)
  }

  const isFavoritesBarActive = showFavoritesBar === true

  return (
    <S.Header>
      <S.Container>
        <S.Logo>
          <a href="/">
            <img src={Logo} className="logo" alt="Logo da empresa bloom" />
          </a>
        </S.Logo>
        <SearchBar setSearch={setSearch} />
        <S.FavoritesImageContainer
          onClick={handleClick}
          isActive={isFavoritesBarActive}
          className="favorites"
        >
          <img src={Star} alt="Estrela que indica os favoritos" />
        </S.FavoritesImageContainer>
      </S.Container>
    </S.Header>
  )
}

export default Header
