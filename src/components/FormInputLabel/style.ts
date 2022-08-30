import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

export const InputLabel = styled.label`
  ${indentsConstructor.create(Indent.MT, 7)}
  ${fonts.bodyBold};
  color: ${Color.Black};
`;
