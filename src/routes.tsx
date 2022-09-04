import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
								element={
									<>
										<h1>{section.heading}</h1>
										<br />
										<h3>{section.description}</h3>
									</>
								}
							/>
						);
					})}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
