import { APISection } from '../../types';
import { HorizontalLine } from '../common/HorizontalLine/HorizontalLine';
import {
	SectionContainer,
	ServiceContainer,
	Heading,
	Description,
} from './Section.styles';

export function Section({ heading, description, services }: APISection) {
	return (
		<SectionContainer>
			<Heading>{heading}</Heading>
			<HorizontalLine />
			<Description>{description}</Description>
			<ServiceContainer>
				{services.map((service) => (
					<>
						<h2>{service.title}</h2>
						<HorizontalLine opacity={1} />
						<br />
					</>
				))}
			</ServiceContainer>
		</SectionContainer>
	);
}
