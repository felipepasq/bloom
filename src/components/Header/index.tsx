import * as S from './styles'
import Logo from '../../assets/logo.svg'
import Star from '../../assets/start.svg'
import SearchBar from '../SearchBar'

type HeaderProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<HeaderProps> = ({ setSearch }) => {
  return (
    <S.Header>
      <S.Container>
        <S.Logo>
          <a href="/">
            <img src={Logo} className="logo" alt="Logo da empresa bloom" />
          </a>
        </S.Logo>
        <SearchBar setSearch={setSearch} />
        <img
          src={Star}
          className="icon"
          alt="Estrela que indica os favoritos"
        />
      </S.Container>
    </S.Header>
  )
}

export default Header
