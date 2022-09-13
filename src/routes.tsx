import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
				<Route path="/tutorial" element={<Main />}>
					<Route path="/tutorial" element={<Tutorial />} />
				</Route>
				<Route path="/" element={<Navigate to="/tutorial" replace />} />
			</Routes>
		</BrowserRouter>
	);
}
