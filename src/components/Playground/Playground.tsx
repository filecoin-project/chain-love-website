import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { ChainLoveAPI } from '../../api/chain.love';
import { APIService } from '../../types';
import { Button } from '../common/Button/Button';
import { ButtonContainer, PlaygroundContainer } from './Playground.styles';

export function Playground({
	title,
	description,
	method,
	permissions,
}: APIService) {
	const [code, setCode] = useState(() =>
		JSON.stringify(method.request, null, 2),
	);
	const [res, setRes] = useState(() =>
		JSON.stringify(method.response, null, 2),
	);

	const [loading, setLoading] = useState(false);

	function handleTryClick() {
		if (method.name || title) {
			console.log({ code });
			setLoading(true);
			ChainLoveAPI.callMethod(method.name || title, JSON.parse(code)).then(
				(data) => {
					setLoading(false);
					setRes(JSON.stringify(data, null, 2));
				},
			);
		}
	}
	return (
		<PlaygroundContainer>
			<ButtonContainer>
				<Button disabled={loading} onClick={handleTryClick}>
					Try it! 😎
				</Button>
			</ButtonContainer>
			<Editor
				height="22rem"
				width="100%"
				defaultLanguage="json"
				theme="vs-dark"
				value={code}
				onChange={(value) => {
					setCode(value);
				}}
				className="styled-monaco-editor"
				options={{
					wordWrapColumn: 20,
					scrollBeyondLastLine: false,
					wordWrap: 'on',
					acceptSuggestionOnCommitCharacter: true,
					acceptSuggestionOnEnter: 'on',
					codeLens: false,
					colorDecorators: false,
					contextmenu: false,
					minimap: { enabled: false },
				}}
			/>
			<Editor
				height="22rem"
				width="100%"
				defaultLanguage="json"
				theme="vs-dark"
				value={loading ? 'Executing Service...' : res}
				onChange={(value) => {
					setCode(value);
				}}
				className="styled-monaco-editor"
				options={{
					wordWrapColumn: 20,
					scrollBeyondLastLine: false,
					wordWrap: 'on',
					acceptSuggestionOnCommitCharacter: true,
					acceptSuggestionOnEnter: 'on',
					codeLens: false,
					colorDecorators: false,
					contextmenu: false,
					minimap: { enabled: false },
					readOnly: true,
				}}
			/>
		</PlaygroundContainer>
	);
}
