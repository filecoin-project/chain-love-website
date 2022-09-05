import { Container, Logo, ThemeIcon, MoonIcon, SunIcon, LogoAndTitle, StyledTitle } from './Topbar.styles';
import LogoImage from '../../../assets/main-logo.png';
interface TopbarProps {
  theme: 'light' | 'dark',
  toggleTheme: () => void;
}

export const Topbar = ({theme, toggleTheme}: TopbarProps) => {
  return (
    <Container>
      <LogoAndTitle>
      <Logo src={LogoImage} alt='logo'/>
        <StyledTitle type='h3'>api.chain.love</StyledTitle>
      </LogoAndTitle>
      <ThemeIcon onClick={toggleTheme}>
        {theme === 'light' ? <MoonIcon /> : <SunIcon /> }
      </ThemeIcon>
    </Container>
  )
}