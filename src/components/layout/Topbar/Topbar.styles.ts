import styled from 'styled-components';

export const Container = styled.nav`
  min-height: 3rem;
  position: sticky;
  background-color: ${({ theme: { colors: { darkPurple } } }) => darkPurple};

`;

