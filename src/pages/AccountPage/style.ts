import styled from "styled-components";
import { ArrowLeftIcon } from "../../assets";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

export const StyledArrowLeft = styled(ArrowLeftIcon)`
  ${indentsConstructor.create(Indent.MB, 4)}
  color: ${Color.Black};
  cursor: pointer;
`;

export const SignOutButton = styled.button`
  ${fonts.h3}
  color: ${Color.Black};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
