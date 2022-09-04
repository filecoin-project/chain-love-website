import { APISection } from '../../types';
import { HorizontalLine } from '../common/HorizontalLine/HorizontalLine';
import { Service } from '../Service/Service';
import {
	SectionContainer,
	ServiceContainer,
	Heading,
	Description,
} from './Section.styles';

export function Section({ heading, description, services }: APISection) {
	return (
		<SectionContainer>
			<Heading type="h3">{heading}</Heading>
			<HorizontalLine />
			<Description>{description}</Description>
			<ServiceContainer>
				{services.map((service) => (
					<Service {...service} key={service.title} />
				))}
			</ServiceContainer>
		</SectionContainer>
	);
}
