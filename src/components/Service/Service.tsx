import { APIService } from '../../types';
import { HorizontalLine } from '../common/HorizontalLine/HorizontalLine';
import { HighlightedCode } from '../common/Typography/HighlightedCode/HighlightedCode';
import { Title } from '../common/Typography/Title/Title';
import { Description, Method, Container, StyledCode } from './Service.styles';

export function Service({
	title,
	description,
	method,
	permissions,
}: APIService) {
	return (
		<Container id={title}>
			<Title>{title}</Title>
			<HorizontalLine />
			<Container>
				<Method type="h6">
					Method: <StyledCode>{method.name || title}</StyledCode>
				</Method>
				<Method type="h6">
					Permissions: <StyledCode>{permissions}</StyledCode>
				</Method>
				<br />
				<Description>{description}</Description>
				<br />
				<HorizontalLine opacity={0.5} />
				<Title type="h3">Inputs : </Title>
				<HighlightedCode>
					{JSON.stringify(method.request, null, 2)}
				</HighlightedCode>
				<Title type="h3">Response : </Title>

				<HighlightedCode>
					{JSON.stringify(method.response, null, 2)}
				</HighlightedCode>
			</Container>
		</Container>
	);
}
