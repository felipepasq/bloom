import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 0.8rem 1.2rem;
  margin-top: 0.8rem;
  max-width: 368px;
  gap: 1.2rem;
  border-radius: 1.6rem;

  img {
    height: 1.6rem;
    width: 1.6rem;
  }

  input {
    border: 0;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`
