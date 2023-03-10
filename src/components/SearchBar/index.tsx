import SearchIcon from '../../assets/search.svg'
import * as S from './styles'

type SearchBarProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <S.Container className="search">
      <img src={SearchIcon} alt="Imagem de uma lupa" />
      <input
        type="text"
        placeholder="Pesquise aqui ..."
        onChange={handleChange}
      />
    </S.Container>
  )
}

export default SearchBar
