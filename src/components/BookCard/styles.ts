import styled from 'styled-components'

type ContainerProps = {
  viewType: 'list' | 'grid'
}

type BookInfoContainerProps = {
  viewType: 'list' | 'grid'
}

type ImageContainerProps = {
  viewType: 'list' | 'grid'
}

type PurchaseButtonProps = {
  viewType: 'list' | 'grid'
}

type BookTitleContainerProps = {
  viewType: 'list' | 'grid'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ viewType }) => (viewType === 'list' ? 'row' : 'column')};
  align-items: ${({ viewType }) => (viewType === 'list' ? 'unset' : 'center')};
  width: ${({ viewType }) => (viewType === 'list' ? '32.8rem' : '15.3rem')};
  height: ${({ viewType }) => (viewType === 'list' ? '17.7rem' : '38.7rem')};
  gap: 1rem;

  @media (min-width: 768px) {
    width: ${({ viewType }) => (viewType === 'list' ? 'unset' : '18.6rem')};
  }
`
export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10.7rem;
  img {
    height: ${({ viewType }) => (viewType === 'list' ? '10.7rem' : '15.3rem')};
    width: max-content;
  }

  @media (min-width: 768px) {
    width: ${({ viewType }) => (viewType === 'list' ? '16.7rem' : '15rem')};
    img {
      height: ${({ viewType }) => (viewType === 'list' ? '16.7rem' : '15rem')};
      width: max-content;
    }
  }
`
export const BookInfoContainer = styled.div<BookInfoContainerProps>`
  display: flex;
  flex-direction: column;
  height: 100%;

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  .book-description {
    margin-bottom: 1.2rem;
  }

  .book-publisher {
    margin-bottom: 1rem;
  }
`

export const BookTitleContainer = styled.div<BookTitleContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  h3 {
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.dark_blue};
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    margin-bottom: 0.9rem;
    span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.gray};
      font-family: ${({ theme }) => theme.fonts.text};
    }
  }

  @media (min-width: 768px) {
    flex-direction: ${({ viewType }) =>
      viewType === 'list' ? 'row' : 'column'};
  }
`

export const PurchaseButton = styled.button<PurchaseButtonProps>`
  margin-top: ${({ viewType }) => (viewType === 'list' ? '1.2rem' : 'auto')};
  width: 13.6rem;
  height: 3.2rem;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.small_paragraph};
  border-radius: 2.4rem;
`
