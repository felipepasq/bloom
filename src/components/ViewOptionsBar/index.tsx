import * as S from './styles'
import BlueListIcon from '../../assets/blue-list.svg'
import BlueGridIcon from '../../assets/blue-grid.svg'
import GreyGridIcon from '../../assets/grey-grid.svg'
import GreyListIcon from '../../assets/grey-list.svg'
import React from 'react'
import { useView } from '../../context/ViewContext'

type ViewOptionsBarProps = {
  barText: string
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  itemsPerPage: number
}

const ViewOptionsBar: React.FC<ViewOptionsBarProps> = ({
  barText,
  setItemsPerPage,
  itemsPerPage,
  setCurrentPage
}) => {
  const { viewType, setViewType } = useView()
  const handleChange = (param: React.ChangeEvent<HTMLSelectElement>) => {
    const toNumber = Number(param.target.value)
    setCurrentPage(1)
    setItemsPerPage(toNumber)
  }
  const handleClick = (value: 'list' | 'grid') => {
    setViewType(value)
  }

  const isList = viewType === 'list' ? true : false

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
            <S.StyledSelect onChange={handleChange} value={itemsPerPage}>
              {generateOptions()}
            </S.StyledSelect>
            <p>por vez</p>
          </S.ViewSelectContainer>
          <img
            src={isList ? BlueListIcon : GreyListIcon}
            alt="Icone de lista"
            onClick={() => handleClick('list')}
          />
          <img
            src={isList ? GreyGridIcon : BlueGridIcon}
            alt="Icone de mosaico"
            onClick={() => handleClick('grid')}
          />
        </S.ViewOptionsContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default ViewOptionsBar
