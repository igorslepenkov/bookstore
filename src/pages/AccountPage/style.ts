import styled from "styled-components";
import { ArrowLeftIcon } from "../../assets";
import { Color, Indent, indentsConstructor } from "../../ui";

export const StyledArrowLeft = styled(ArrowLeftIcon)`
  ${indentsConstructor.create(Indent.MB, 4)}
  color: ${Color.Black};
  cursor: pointer;
`;
