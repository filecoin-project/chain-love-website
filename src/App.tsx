import { GlobalStyle } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './components/layout/Wrapper';
import { AppTheme } from './theme';
import { Topbar } from './components/layout/Topbar/Topbar';
import { Sidebar } from './components/layout/Sidebar/Sidebar';

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
