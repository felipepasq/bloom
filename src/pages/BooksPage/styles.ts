import styled from 'styled-components'

type BooksListProps = {
  viewType: 'list' | 'grid'
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BooksList = styled.div<BooksListProps>`
  display: ${({ viewType }) => (viewType === 'list' ? 'flex' : 'grid')};
  grid-template-columns: ${({ viewType }) =>
    viewType === 'list' ? 'unset' : '1fr 1fr'};
  grid-column-gap: ${({ viewType }) =>
    viewType === 'list' ? 'unset' : '3.6rem'};
  grid-row-gap: ${({ viewType }) => (viewType === 'list' ? '3.7rem' : '2rem')};
  flex-direction: ${({ viewType }) =>
    viewType === 'list' ? 'column' : 'unset'};
  padding: ${({ viewType }) =>
    viewType === 'list' ? '2.7rem 1.6rem' : '2.6rem 1.6rem'};

  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: ${({ viewType }) =>
      viewType === 'list' ? 'column' : 'row'};
    gap: ${({ viewType }) => (viewType === 'list' ? '2.8rem' : '2.7rem')};
    max-width: 1080px;
  }
`
