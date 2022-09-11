import styled from "styled-components";
import { Indent, indentsConstructor } from "../../ui";

export const StyledNotFoundPage = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${indentsConstructor.create(Indent.MT, 1)}
  ${indentsConstructor.create(Indent.MB, 1)}
  text-align: center;
`;
