import styled from 'styled-components';
import { Title } from '../common/Typography/Title/Title';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: auto;
  max-width: 270px;
  background-color: ${({ theme: { colors: { lightGray } } }) => lightGray};
`;

export const SectionTitleContainer = styled.div`
  padding: 23px 0px 23px 23px;
  border-bottom: 1px solid rgba(148,151,155,0.2);
`;

export const SectionTitle = styled(Title)`
  font-size: 22px;
  line-height: 30px;
`;