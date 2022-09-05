import { TypographyProps } from '../types';
import { H1Component, H3Component, H6Component } from './Title.styles';

interface TitleProps extends TypographyProps {
	children: React.ReactNode;
	className?: string;
	type?: 'h1' | 'h3' | 'h6';
	onClick?: () => void;
}

export function Title({ children, className, type, onClick }: TitleProps) {
	const renderTitle = () => {
		switch (type) {
			case 'h3':
				return (
					<H3Component className={className} onClick={onClick}>
						{children}
					</H3Component>
				);

			case 'h6':
				return (
					<H6Component className={className} onClick={onClick}>
						{children}
					</H6Component>
				);

			default:
				return (
					<H1Component className={className} onClick={onClick}>
						{children}
					</H1Component>
				);
		}
	};

	return renderTitle();
}
