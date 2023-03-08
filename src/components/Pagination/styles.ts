import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 100px;
  margin-top: 100px;
  display: flex;
  gap: 0.7rem;
`

type PaginationButtonProps = {
  isSelected?: boolean
}

export const PaginationButton = styled.button<PaginationButtonProps>`
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.secondary : theme.colors.white};
  height: 3.2rem;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.secondary};
  width: 3.1rem;
  border-radius: 1.2rem;
  border: 1px solid #1f2445;
  font-size: 1.2rem;
  font-weight: 700;

  :hover {
    transition-duration: 0.3s;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};

    .arrow {
      filter: ${({ isSelected }) =>
        isSelected ? 'none' : 'brightness(0) invert(1)'};
    }
  }

  .arrow {
    filter: ${({ isSelected }) =>
      isSelected ? 'brightness(0) invert(1)' : 'none'};
  }
`
