import { GlobalStyle } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Wrapper';
import { AppTheme } from './theme';
import { Topbar } from './components/Topbar/Topbar';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
        <Topbar />
        <Wrapper>
          <Sidebar />
          <div />
        </Wrapper>
    </ThemeProvider>
  );
}

export default App;
