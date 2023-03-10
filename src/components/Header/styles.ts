import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 128rem;
  margin: auto;
  padding-left: 1.6rem;

  .search {
    order: 3;
  }

  .favorites {
    order: 2;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: unset;
    flex-direction: row;
    justify-content: unset;
    padding: 0 12rem;
    .search {
      order: 2;
    }

    .favorites {
      margin-left: auto;
    }
  }
`
export const Logo = styled.div`
  width: 82%;

  img {
    width: 14.4rem;
    height: 2.8rem;
    order: 1;
  }

  @media (min-width: 768px) {
    width: auto;
    margin-right: 14.5rem;
    img {
      width: 19.1rem;
      height: 3.8rem;
      order: 1;
    }
  }
`
type FavoritesImageContainerProps = {
  isActive: boolean
}
export const FavoritesImageContainer = styled.div<FavoritesImageContainerProps>`
  width: 5.6rem;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ isActive }) => (isActive ? '#0B1A8E' : 'unset')};
  justify-content: center;
  cursor: pointer;
  img {
    margin: 0 auto;
    height: 2.3rem;
    width: 2.4rem;
  }

  @media (min-width: 768px) {
    height: 6rem;
    width: 6.4rem;
  }
`
