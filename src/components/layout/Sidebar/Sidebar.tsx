import { useLocation } from 'react-router-dom';
import { api } from '../../../constants/api';
import {
	Container,
	SectionTitleContainer,
	SectionTitle,
	ServiceTitle,
} from './Sidebar.styles';

export const Sidebar = () => {
	const { pathname } = useLocation();

	const handleScrollTo = (id: string) => {
		document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<Container>
			<SectionTitleContainer>
				{api.map((section) => {
					const sectionRoute = `/${section.heading}`;
					const isActive = pathname === sectionRoute;

					return (
						<>
							<SectionTitle
								key={`${sectionRoute}-link`}
								to={sectionRoute}
								type="h6"
								active={isActive}
							>
								{section.heading}
							</SectionTitle>
							{isActive &&
								section.services.map((service) => {
									return (
										<ServiceTitle
											key={`${service.title}-link`}
											onClick={() => handleScrollTo(service.title)}
											type="h6"
											active={false}
										>
											#
											{service.title.length > 20
												? service.title.substring(0, 20) + '...'
												: service.title}
										</ServiceTitle>
									);
								})}
						</>
					);
				})}
			</SectionTitleContainer>
		</Container>
	);
};
