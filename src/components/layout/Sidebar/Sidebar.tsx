import { useLocation } from 'react-router-dom';
import { api } from '../../../constants/api';
import {
	Container,
	SectionTitleContainer,
	SectionTitle,
	ServiceTitle,
} from './Sidebar.styles';

export const Sidebar = () => {
	const { pathname, hash } = useLocation();

	const handleScrollTo = (id: string) => {
		document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<Container>
			<SectionTitleContainer>
				<SectionTitle
					to="/tutorial"
					type="h6"
					active={pathname === '/tutorial'}
				>
					Tutorial
				</SectionTitle>
				<SectionTitle to="/docs" type="h6" active={pathname === '/docs'}>
					API Docs
				</SectionTitle>
				{pathname.includes('/docs') &&
					api.map((section) => {
						const sectionRoute = `/${section.heading}`;
						const isActive = pathname.includes(sectionRoute);

						return (
							<>
								<SectionTitle
									key={`${sectionRoute}-link`}
									to={'/docs' + sectionRoute}
									type="h6"
									active={isActive}
									subtitle
								>
									{section.heading}
								</SectionTitle>
								{isActive &&
									section.services.map((service) => {
										const isServiceActive = hash === '#' + service.title;
										return (
											<ServiceTitle
												key={`${service.title}-link`}
												onClick={() => handleScrollTo(service.title)}
												to={`#${service.title}`}
												type="h6"
												active={isServiceActive}
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
