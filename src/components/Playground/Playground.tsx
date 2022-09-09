import Editor from '@monaco-editor/react';
import { APIService } from '../../types';
import { ButtonComponent } from '../common/Button/Button.styles';
import { HighlightedCode } from '../common/Typography/HighlightedCode/HighlightedCode';
import { PlaygroundContainer } from './Playground.styles';

export function Playground({
	title,
	description,
	method,
	permissions,
}: APIService) {
	return (
		<PlaygroundContainer>
			<ButtonComponent>Try it! 😎</ButtonComponent>
			<Editor
				height="30vh"
				width="100%"
				defaultLanguage="javascript"
				theme="vs-dark"
				value={JSON.stringify(method.request, null, 2)}
			/>
			<HighlightedCode>
				{JSON.stringify(method.response, null, 2)}
			</HighlightedCode>
		</PlaygroundContainer>
	);
}
