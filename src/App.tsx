import { GlobalStyle } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { AppTheme } from './theme';
import { Topbar } from './components/layout/Topbar/Topbar';
import { AppRoutes } from './routes';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
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
