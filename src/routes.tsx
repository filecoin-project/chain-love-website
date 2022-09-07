import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Section } from './components/Section/Section';
import { Tutorial } from './components/Tutorial/Tutorial';
import { api } from './constants/api';
import { Main } from './containers/Main/Main';
export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/docs" element={<Main />}>
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
				<Route path="/" element={<Main />}>
					<Route path="/tutorial" element={<Tutorial />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
