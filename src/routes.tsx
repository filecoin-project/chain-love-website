import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Section } from './components/Section/Section';
import { api } from './constants/api';
import { Main } from './containers/Main/Main';
export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}>
					{api.map((section) => {
						return (
							<Route
								key={section.heading}
								path={section.heading}
								element={<Section {...section} />}
							/>
						);
					})}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
