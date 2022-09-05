import styled from "styled-components";

export const SpanComponent = styled.span`
  font-size: 14px;
  line-height: 20px;
	color: ${({ theme: { colors: { font } } }) => font};
`;
