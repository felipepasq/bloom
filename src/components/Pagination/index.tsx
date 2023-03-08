import React from 'react'
import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowRight from '../../assets/arrow-right.svg'
import { PaginationButton } from './styles'
import * as S from './styles'

type PaginationProps = {
  totalPages: number
  currentPage?: number
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage = 1
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const value = button.textContent
    return value
  }

  const generateButtons = () => {
    const buttons = Array.from({ length: totalPages }, (_, index) => (
      <PaginationButton
        isSelected={currentPage === index + 1}
        key={index + 1}
        onClick={(e) => handleClick(e)}
      >
        {index + 1}
      </PaginationButton>
    ))

    return buttons
  }

  return (
    <S.Container>
      <>
        <PaginationButton>
          <img src={ArrowLeft} className="arrow" />
        </PaginationButton>
        {generateButtons()}
        <PaginationButton>
          <img src={ArrowRight} className="arrow" />
        </PaginationButton>
      </>
    </S.Container>
  )
}

export default Pagination
