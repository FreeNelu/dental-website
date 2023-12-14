import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const BackgroundPattern = styled.div`
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.35) 2.5%, 
    transparent 2.5%,
    rgba(255, 255, 255, 0.25) 5%, 
    transparent 5%,
    rgba(255, 255, 255, 0.20) 10%, 
    transparent 10%,
    rgba(255, 255, 255, 0.15) 20%, 
    transparent 15%
    /* Add more sizes as needed */
  );
  background-position: 0% 0%;
  background-size: 20vmin 20vmin;
  height: 100vh;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease, 
    background-size 800ms ease,
    background-position 800ms ease;
  width: 100vw;
  z-index: 1;

  &[data-active-index="0"] {
    background-position: 0% -25%;
  }

  &[data-active-index="1"] {
    background-position: 0% -50%;
  }

  &[data-active-index="2"] {
    background-position: 0% -75%;
  }

  &[data-active-index="3"] {
    background-position: 0% -100%;
  }

  &:hover {
    background-size: 16vmin 16vmin;
    opacity: 0.5;
  }
`;

export const Side = styled.div<{ color: string; width: number, transition: number }>`
  display: grid;
  height: 100vh;
  overflow: hidden;
  place-items: center;
  position: absolute;
  text-align: center;
  width: ${props => props.width}%;
  background-color: ${props => props.color};
  transition: width ${props => props.transition}s cubic-bezier(0.23, 1, 0.32, 1), filter 0.5s ease;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const ToothIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  font-size: 3rem;
  z-index: 1;
`;


export const ToothIconShadow = styled(FontAwesomeIcon)`
  color: #a3c3e7; 
  font-size: 3rem;
  position: absolute;
  left: -4px;
  top: 16px;
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
    margin: 8px 20vw;
    height: 7.5vh;
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
  padding: 0px;

  &:hover {
    transform: scale(1.25)
  }
`;