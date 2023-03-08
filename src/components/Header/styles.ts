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
  padding: 1.2rem 1.6rem;

  .search {
    order: 3;
  }

  .icon {
    order: 2;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: unset;
    flex-direction: row;
    justify-content: unset;
    padding: 1.8rem 12rem;
    .search {
      order: 2;
    }

    .icon {
      margin-left: auto;
    }
  }
`
export const Logo = styled.div`
  width: 90%;

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
