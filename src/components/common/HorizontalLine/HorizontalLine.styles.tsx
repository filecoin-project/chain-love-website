import styled from 'styled-components';

export const StyledLine = styled.div<{ weight?: string; opacity?: number }>`
	height: ${({ weight }) => weight || '1px'};
	min-height: 1px;
	width: 100%;
	background-color: rgba(148, 151, 155, ${({ opacity }) => opacity || 0.2});
`;
