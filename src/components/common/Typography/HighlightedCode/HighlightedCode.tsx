import hljs from 'highlight.js/lib/core';
import { StyledPre } from './HighlightedCode.styles';

export function HighlightedCode({ children }: { children: string }) {
	const highlighted = hljs.highlight(children, { language: 'javascript' });
	return (
		<StyledPre className="hljs">
			<code
				dangerouslySetInnerHTML={{ __html: highlighted.value }}
				className="language-javascript"
			/>
		</StyledPre>
	);
}
