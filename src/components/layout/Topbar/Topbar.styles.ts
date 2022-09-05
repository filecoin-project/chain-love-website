import styled from 'styled-components';
import { ReactComponent as Moon } from '../../../assets/moon.svg';
import { ReactComponent as Sun } from '../../../assets/sun.svg';
import { Title } from '../../common/Typography/Title/Title';


export const Container = styled.nav`
	height: 3rem;
	position: sticky;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({
	theme: {
		colors: { background: { topbar } },
	},
}) => topbar};
padding: 5px 30px;
border-bottom: 1px solid rgba(148, 151, 155, 0.2);

`;

export const Logo = styled.img`
	height: 37px;
`;

export const LogoAndTitle = styled.div`
	display: flex;
	align-items: center;
`

export const StyledTitle = styled(Title)`
	font-family: ${({ theme: { fonts: { brandonGrotesque } } }) => brandonGrotesque};
	font-size: 26px;
	margin-left: 15px;
`

export const ThemeIcon = styled.div`
	display: inline-block;
	height: 20px;
	cursor: pointer;
	:hover{
		opacity: 0.6;
	}
`;

export const MoonIcon = styled(Moon)`
	height: 100%;
	font-size: 20px;
`;

export const SunIcon = styled(Sun)`
	height: 100%;
	fill: ${({ theme: { colors: { white } } }) => white};
`	
