import styled from 'styled-components';

export const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const MenuItemsContainer = styled.div<{ transitioned: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ transitioned }) => (transitioned ? '0' : '-50%')};
  height: 100vh;
  margin-right: clamp(4rem, 20vw, 48rem);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2;
  justify-content: center; /* Center items vertically */
  transition: right 1s ease;
`;

export const MenuItem = styled.div<{ dimColor: boolean }>`
  color: #192428;
  cursor: pointer;
  display: block;
  font-family: 'Karla', sans-serif;
  font-size: clamp(2rem, 3vw, 4rem);
  padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
  text-decoration: none;
  transition: opacity 400ms ease, color 400ms ease;
  
  opacity:${({ dimColor }) => (dimColor ? "0.3" : '1')};
`;
