import React, { useMemo } from 'react'
import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowRight from '../../assets/arrow-right.svg'
import { PaginationButton } from './styles'
import * as S from './styles'

type PaginationProps = {
  totalPages: number
  currentPage?: number
  setCurrentPage: (pageNumber: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage = 1,
  setCurrentPage
}) => {
  const generateButtons = useMemo(() => {
    const visibleButtons = 6
    const halfVisible = Math.floor(visibleButtons / 2)
    let start = 1
    let end = totalPages
    if (totalPages > visibleButtons) {
      if (currentPage <= halfVisible) {
        end = visibleButtons
      } else if (currentPage >= totalPages - halfVisible) {
        start = totalPages - visibleButtons + 1
      } else {
        start = currentPage - halfVisible
        end = currentPage + halfVisible
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
          <img src={ArrowLeft} className="arrow" alt="Previous page" />
        </PaginationButton>
        {generateButtons}
        <PaginationButton onClick={handleNextPage}>
          <img src={ArrowRight} className="arrow" alt="Next page" />
        </PaginationButton>
      </>
    </S.Container>
  )
}

export default Pagination
