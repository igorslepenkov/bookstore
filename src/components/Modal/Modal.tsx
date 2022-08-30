import { Portal, PortalTarget } from "../Portal";
import {
  CloseButton,
  ModalNotification,
  ModalNotificationWrapper,
  ModalStatusHeading,
  StyledModal,
} from "./style";

export type ModalStatus = "success" | "error";

interface IProps {
  isOpen: boolean;
  status: ModalStatus;
  message: string;
  handler: () => void;
}

export const Modal = ({ isOpen, status, message, handler }: IProps) => {
  return isOpen ? (
    <Portal target={PortalTarget.MODAL}>
      <StyledModal>
        <ModalNotificationWrapper>
          <CloseButton type="button" onClick={handler}>
            Close
          </CloseButton>
          <ModalStatusHeading status={status}>{status}</ModalStatusHeading>
          <ModalNotification>{message}</ModalNotification>
        </ModalNotificationWrapper>
      </StyledModal>
    </Portal>
  ) : null;
};
