import { GlobalStyle } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { AppTheme } from './theme';
import { Topbar } from './components/layout/Topbar/Topbar';
import { AppRoutes } from './routes';

function App() {
	return (
		<ThemeProvider theme={AppTheme}>
			<GlobalStyle />
			<Topbar />
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
