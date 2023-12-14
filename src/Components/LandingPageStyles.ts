import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Side = styled.div<{ color: string; width: number }>`
  display: grid;
  height: 100vh;
  overflow: hidden;
  place-items: center;
  position: absolute;
  text-align: center;
  width: ${props => props.width}%;
  background-color: ${props => props.color};
`;

export const Title = styled.h2`
font-family: 'Karla', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0px 10vw;
  width: 80vw;
  color: ${props => props.color};
`;

export const Fancy = styled.span`
font-family: 'Karla', sans-serif;
  font-size:  2.5rem;
  line-height: 0.6em;
  color: ${props => props.color};
`;

export const Header = styled.div`
    display: flex;
    z-index: 99;
    justify-content: space-between;
    width: 100vh;
    margin: 8px 20vw
`;

export const Logo = styled.h2`
   font-family: 'Karla', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: ${props => props.color};
  /* Adjust letter spacing for a more interesting look */
  letter-spacing: 2px;
  /* Enable font variations for a more unique style (customize values as needed) */
  font-variation-settings: 'wght' 800, 'slnt' -10;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.75rem;
  color: #192428;
  transition: transform 0.3s ease-in-out; /* Add a smooth transition effect */

  &:hover {
    transform: scale(1.25)
  }
`;