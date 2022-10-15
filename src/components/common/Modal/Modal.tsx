import { ReactNode } from 'react';
import {
	ModalOverlay,
	ModalContainer,
	ModalHeader,
	ModalTitle,
	ModalContent,
	ModalClose,
} from './Modal.styles';

export function Modal({
	children,
	isOpen,
	onClose,
	title,
}: {
	isOpen: boolean;
	children: ReactNode;
	onClose: () => void;
	title?: string;
}) {
	return (
		<ModalOverlay isOpen={isOpen}>
			<ModalContainer>
				<ModalHeader>
					<ModalClose onClick={onClose}>✖</ModalClose>
					{title && <ModalTitle>{title}</ModalTitle>}
				</ModalHeader>
				<ModalContent>{children}</ModalContent>
			</ModalContainer>
		</ModalOverlay>
	);
}
