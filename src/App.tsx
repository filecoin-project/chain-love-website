import { GlobalStyle } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Topbar } from './components/layout/Topbar/Topbar';
import { AppRoutes } from './routes';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useState } from 'react';
import { lightTheme } from './theme/lightTheme';
import { darkTheme } from './theme/darkTheme';
hljs.registerLanguage('javascript', javascript);

function App() {
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<Topbar theme={theme} toggleTheme={toggleTheme}/>
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
