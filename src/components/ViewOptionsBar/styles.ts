import styled from 'styled-components'
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light_gray};
`
export const Container = styled.div`
  padding: 0.8rem 1.6rem;
  display: flex;
  align-items: center;
  max-width: 128rem;
  margin: auto;
  h3 {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    padding: 1rem 12rem;
  }
`
export const ViewOptionsContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  p {
    font-family: ${({ theme }) => theme.fonts.small_paragraph};
    font-size: 1.2rem;
  }

  p:nth-of-type(2) {
    display: none;
  }

  @media (min-width: 768px) {
    p:nth-of-type(2) {
      display: block;
    }
  }
`

export const ViewSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-right: 0.11rem;

  @media (min-width: 768px) {
    margin-right: 4.3rem;
  }
`

export const StyledSelect = styled.select`
  border: none;
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors.light_gray};

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    height: 1px;
    background-color: red;
  }
`
