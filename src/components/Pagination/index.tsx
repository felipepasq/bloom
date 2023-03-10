import React, { useMemo } from 'react'
import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowRight from '../../assets/arrow-right.svg'
import { PaginationButton } from './styles'
import * as S from './styles'

type PaginationProps = {
  totalPages: number
  currentPage: number
  setCurrentPage: (pageNumber: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage
}) => {
  const generateButtons = useMemo(() => {
    const visibleButtons = totalPages < 6 ? totalPages : 6
    const beforeVisible = 2
    const afterVisible = 3

    let start = currentPage - beforeVisible
    let end = currentPage + afterVisible

    if (start <= 0) {
      start = 1
      end = start + visibleButtons - 1
    } else if (end > totalPages) {
      end = totalPages
      start = end - visibleButtons + 1
      if (start <= 0) {
        start = 1
      }
    }

    const buttons = Array.from({ length: end - start + 1 }, (_, index) => {
      const pageNumber = start + index
      return (
        <PaginationButton
          isSelected={currentPage === pageNumber}
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </PaginationButton>
      )
    })

    return buttons
  }, [totalPages, currentPage, setCurrentPage])

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <S.Container>
      <>
        <PaginationButton onClick={handlePreviousPage}>
          <img
            src={ArrowLeft}
            className="arrow"
            alt="Seta que indica ir para a página anterior"
          />
        </PaginationButton>
        {generateButtons}
        <PaginationButton onClick={handleNextPage}>
          <img
            src={ArrowRight}
            className="arrow"
            alt="Seta que indica ir para a próxima página"
          />
        </PaginationButton>
      </>
    </S.Container>
  )
}

export default Pagination
