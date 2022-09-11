import styled from "styled-components";
import { Indent, indentsConstructor, Media } from "../../ui";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${indentsConstructor.create(Indent.MT, 3)}

  ${Media.MD} {
    width: 544px;
    ${indentsConstructor.create(Indent.PL, 4)}
    ${indentsConstructor.create(Indent.PR, 4)}
  }
`;
