import { useLocation } from 'react-router-dom';
import { api } from '../../../constants/api';
import {
	Container,
	SectionTitleContainer,
	SectionTitle,
} from './Sidebar.styles';

export const Sidebar = () => {
	const { pathname } = useLocation();
	return (
		<Container>
			<SectionTitleContainer>
				{api.map((section) => {
					const sectionRoute = `/${section.heading}`;
					const isActive = pathname === sectionRoute;
					console.log({ isActive, sectionRoute });
					return (
						<SectionTitle
							key={`${sectionRoute}-link`}
							to={sectionRoute}
							type="h6"
							active={isActive}
						>
							{section.heading}
						</SectionTitle>
					);
				})}
			</SectionTitleContainer>
		</Container>
	);
};
