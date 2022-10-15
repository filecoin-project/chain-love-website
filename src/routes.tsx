import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { WalletPage } from './components/WalletPage/WalletPage';
import { MessagePage } from './components/MessagePage/MessagePage';
import { Section } from './components/Section/Section';
import { Tutorial } from './components/Tutorial/Tutorial';
import { api } from './constants/api';
import { ChainInformation } from './containers/ChainInformation/ChainInformation';
import { Main } from './containers/Main/Main';
export function AppRoutes() {
	return (
		<HashRouter>
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
				<Route path="/api/wallet" element={<Main />}>
					<Route path="/api/wallet" element={<WalletPage />} />
				</Route>
				<Route path="/api/message" element={<Main />}>
					<Route path="/api/message" element={<MessagePage />} />
				</Route>
				<Route path="/" element={<Navigate to="/tutorial" replace />} />
				<Route path="/chain" element={<ChainInformation />} />
			</Routes>
		</HashRouter>
	);
}
