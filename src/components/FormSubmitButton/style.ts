import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

export const SubmitButton = styled.button`
  width: 100%;
  ${indentsConstructor.create(Indent.MB, 4)}
  ${indentsConstructor.create(Indent.MT, 4)}
  padding: 15px 0;
  ${fonts.h3}
  color: ${Color.White};
  letter-spacing: 0.05em;
  border: none;
  background-color: ${Color.Black};
  cursor: pointer;
`;
