import styled from 'styled-components'

type ContainerProps = {
  viewType: 'list' | 'grid'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${({ viewType }) => (viewType === 'grid' ? '154px' : 'unset')};

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }

  span {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.text};
    color: #9296ac;
    font-style: italic;
    margin-bottom: 0.8rem;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.2rem;
  }

  p:first-of-type {
    margin-bottom: 0.4rem;
  }

  @media (min-width: 768px) {
    display: ${({ viewType }) => (viewType === 'grid' ? 'flex' : 'grid')};
    grid-template-columns: 0.6fr 0.23fr 0.18fr;
    max-width: 1080px;
    align-items: ${({ viewType }) =>
      viewType === 'grid' ? 'unset' : 'center'};
    width: 100%;

    a {
      font-size: 2rem;
    }

    span {
      margin-bottom: ${({ viewType }) =>
        viewType === 'list' ? '0' : '1.2rem'};
    }

    p:first-of-type {
      margin-bottom: ${({ viewType }) =>
        viewType === 'list' ? '0' : '0.4rem'};
    }
  }

  .categoryTitle {
  }
`
type CategoryTileContainerProps = {
  viewType: 'list' | 'grid'
}

export const CategoryTileContainer = styled.div<CategoryTileContainerProps>`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    align-items: ${({ viewType }) =>
      viewType === 'list' ? 'center' : 'unset'};
    gap: ${({ viewType }) => (viewType === 'list' ? '1.2rem' : '0.4rem')};
    flex-direction: ${({ viewType }) =>
      viewType === 'list' ? 'row' : 'column'};
  }
`
