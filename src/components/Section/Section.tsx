import { APISection } from '../../types';
import { HorizontalLine } from '../common/HorizontalLine/HorizontalLine';
import { Title } from '../common/Typography/Title/Title';
import { Playground } from '../Playground/Playground';
import { Service } from '../Service/Service';
import {
	SectionContainer,
	ServiceContainer,
	Heading,
	Description,
	ServiceWrapper,
	PlaygroundTitleContainer,
} from './Section.styles';

export function Section({ heading, description, services }: APISection) {
	return (
		<SectionContainer>
			<Heading type="h3">{heading}</Heading>
			<HorizontalLine />
			{description && <Description>{description}</Description>}
			<ServiceContainer>
				{services.map((service) => (
					<ServiceWrapper key={service.title}>
						<Service {...service} />
						<PlaygroundTitleContainer>
							<Title type='h3'>Playground</Title>
							<HorizontalLine />
						</PlaygroundTitleContainer>
						<Playground {...service} />
					</ServiceWrapper>
				))}
			</ServiceContainer>
		</SectionContainer>
	);
}
