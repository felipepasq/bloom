import styled from 'styled-components'
type OverlayProps = {
  isActive: boolean
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 4.5rem;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #010311;
  opacity: 0.7;
  display: block;
  z-index: 1;
  opacity: 0.5;
  @media (min-width: 768px) {
    top: 6rem;
  }
`
