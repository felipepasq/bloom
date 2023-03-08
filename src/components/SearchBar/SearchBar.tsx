import SearchIcon from '../../assets/search.svg'
import * as S from './styles'
const SearchBar: React.FC = () => {
  return (
    <S.Container className="search">
      <img src={SearchIcon} alt="Imagem de uma lupa" />
      <input type="text" placeholder="Pesquise aqui ..." />
    </S.Container>
  )
}

export default SearchBar
