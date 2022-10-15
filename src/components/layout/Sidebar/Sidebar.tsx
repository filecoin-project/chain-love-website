import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../../constants/api';
import { useMobileDetect } from '../../../hooks/useMobileDetect';
import {
	Container,
	SectionTitleContainer,
	SectionTitle,
	ServiceTitle,
	TitleAndArrowContainer,
	MenuArrow,
} from './Sidebar.styles';
import { ReactComponent as ChevronDown } from '../../../assets/chevron-down.svg';
import { ReactComponent as ChevronUp } from '../../../assets/chevron-up.svg';

export const Sidebar = () => {
	const { pathname, hash } = useLocation();
	const mobileView = useMobileDetect();
	const [showApiList, setShowApiList] = useState<boolean>(false);

	const handleScrollTo = (id: string) => {
		document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
	};

	const toggleDocsClick = () => {
		if (mobileView) {
			setShowApiList(!showApiList);
		} else {
			setShowApiList(true);
		}
	};

	return (
		<Container>
			<SectionTitleContainer>
				<SectionTitle
					to="/tutorial"
					type="h6"
					active={pathname === '/tutorial'}
				>
					Getting Started
				</SectionTitle>
				<TitleAndArrowContainer onClick={toggleDocsClick}>
					<SectionTitle to={'/docs'} type="h6" active={pathname === '/docs'}>
						{mobileView ? 'Menu' : 'API Docs'}
					</SectionTitle>
					{mobileView && (
						<MenuArrow>
							{showApiList ? <ChevronUp /> : <ChevronDown />}
						</MenuArrow>
					)}
				</TitleAndArrowContainer>
				{showApiList &&
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
									onClick={toggleDocsClick}
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
				<SectionTitle to={'/chain'} type="h6" active={pathname === '/chain'}>
					Chain Information
				</SectionTitle>
				<SectionTitle
					to="/api/wallet"
					type="h6"
					active={pathname === '/api/wallet'}
				>
					Wallet Info
				</SectionTitle>

				<SectionTitle
					to="/api/message"
					type="h6"
					active={pathname === '/api/message'}
				>
					Message
				</SectionTitle>
			</SectionTitleContainer>
		</Container>
	);
};
