import styled from "styled-components";
import { ArrowLeft } from "../../assets";
import { Color, Indent, indentsConstructor } from "../../ui";

export const StyledArrowLeft = styled(ArrowLeft)`
  ${indentsConstructor.create(Indent.MB, 4)}
  color: ${Color.Black};
  cursor: pointer;
`;
