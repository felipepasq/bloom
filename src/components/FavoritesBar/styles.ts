import styled from 'styled-components'

type ContainerProps = {
  isActive: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 4.5rem;
  right: 0;
  width: 29rem;
  height: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 2;
  display: block;
  border-top: 0.6rem solid #0b1a8e;
  padding: 1.2rem;

  h2 {
    font-size: 1.8rem;
    color: #0b1a8e;
    font-family: ${({ theme }) => theme.fonts.text};
  }

  @media (min-width: 768px) {
    width: 40.9rem;
    top: 6rem;
  }
`

export const FavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1.2rem;
`

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${({ theme }) => theme.fonts.text};
  gap: 0.8rem;
  img {
    height: 5rem;
    width: max-content;
  }
`
export const FavoriteInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  font-family: ${({ theme }) => theme.fonts.text};

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.4rem;

    img {
      height: 1rem;
      width: 1.1rem;
    }
  }
`
export const FavoriteTitleContainer = styled.div`
  h3 {
    font-weight: 700;
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.text};
  }
`
export const NoResultsText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 1.8rem;
`
