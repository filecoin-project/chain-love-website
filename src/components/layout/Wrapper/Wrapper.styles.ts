import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 3rem);
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme: { colors: { background: { wrapper } } } }) => wrapper};

  @media screen and (max-width: ${({ theme: { breakPoints: { large } } }) => large}) {
		flex-direction: column;
    height: auto;
	}
`