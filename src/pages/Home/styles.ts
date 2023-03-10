import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

type CategoriesListListProps = {
  viewType: 'list' | 'grid'
}

export const CategoriesList = styled.div<CategoriesListListProps>`
  display: ${({ viewType }) => (viewType === 'list' ? 'flex' : 'grid')};
  grid-template-columns: ${({ viewType }) =>
    viewType === 'grid' ? '1fr 1fr' : 'unset'};
  flex-direction: ${({ viewType }) =>
    viewType === 'list' ? 'column' : 'unset'};
  padding: 1.3rem 1.6rem;
  gap: 2.6rem;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: ${({ viewType }) =>
      viewType === 'list' ? 'column' : 'row'};
    gap: ${({ viewType }) => (viewType === 'list' ? '5.4rem' : '2.8rem')};
    padding: ${({ viewType }) =>
      viewType === 'list' ? '2.4rem 1.6rem' : '4.1rem 1.6rem'};
    max-width: 1080px;
  }
`
export const NotFoundText = styled.h2`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.gray};
`
