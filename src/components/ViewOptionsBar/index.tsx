import * as S from './styles'
import ListIcon from '../../assets/list.svg'
import GridIcon from '../../assets/grid.svg'
type ViewOptionsBarProps = {
  barText: string
}

const ViewOptionsBar: React.FC<ViewOptionsBarProps> = ({ barText }) => {
  const handleChange = (param: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(param.target.value)
  }

  const generateOptions = () => {
    const options = Array.from({ length: 5 }, (_, index) => (
      <option key={index}>{index + 1}</option>
    ))

    return options
  }

  return (
    <S.Wrapper>
      <S.Container>
        <h3>{barText}</h3>
        <S.ViewOptionsContainer>
          <S.ViewSelectContainer>
            <p>Exibir</p>
            <S.StyledSelect onChange={handleChange}>
              {generateOptions()}
            </S.StyledSelect>
            <p>por vez</p>
          </S.ViewSelectContainer>
          <img src={ListIcon} alt="Icone de lista" />
          <img src={GridIcon} alt="Icone de lista" />
        </S.ViewOptionsContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default ViewOptionsBar
