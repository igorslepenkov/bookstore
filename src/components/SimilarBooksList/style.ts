import styled from "styled-components";
import { Indent, indentsConstructor } from "../../ui";

export const StyledSimilarBooksList = styled.ul`
  display: flex;
  ${indentsConstructor.create(Indent.MT, 2)}
  column-gap: 32px;
  overflow-y: hidden;
`;
