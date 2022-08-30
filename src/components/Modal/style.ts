import styled from "styled-components";
import { Color, fonts } from "../../ui";

interface ModalStatusProps {
  status: "success" | "error";
}

export const StyledModal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalNotificationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: fit-content();
  width: fit-content;
  padding: 15px;
  background-color: ${Color.White};
  border: 2px solid #e7e7e7;
  text-align: center;
`;

export const ModalStatusHeading = styled.h2`
  ${fonts.h2}
  color: ${({ status }: ModalStatusProps) =>
    status === "success" ? Color.Success : Color.Danger};
`;

export const ModalNotification = styled.p`
  ${fonts.bodyRegular}
  color: ${Color.Black};
`;

export const CloseButton = styled.button`
  justify-self: flex-end;
  ${fonts.bodyBold}
  color: ${Color.Black};
  background-color: transparent;
  border: none;
`;
