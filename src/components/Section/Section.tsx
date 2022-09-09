import { APISection } from '../../types';
import { HorizontalLine } from '../common/HorizontalLine/HorizontalLine';
import { Playground } from '../Playground/Playground';
import { Service } from '../Service/Service';
import {
	SectionContainer,
	ServiceContainer,
	Heading,
	Description,
	ServiceWrapper,
} from './Section.styles';

export function Section({ heading, description, services }: APISection) {
	return (
		<SectionContainer>
			<Heading type="h3">{heading}</Heading>
			<HorizontalLine />
			<Description>{description}</Description>
			<ServiceContainer>
				{services.map((service) => (
					<ServiceWrapper key={service.title}>
						<Service {...service} />
						<Playground {...service} />
					</ServiceWrapper>
				))}
			</ServiceContainer>
		</SectionContainer>
	);
}
