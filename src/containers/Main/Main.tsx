import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/layout/Sidebar/Sidebar';
import { Wrapper } from '../../components/layout/Wrapper';

export function Main() {
	return (
		<Wrapper>
			<Sidebar />
			<Outlet />
		</Wrapper>
	);
}
