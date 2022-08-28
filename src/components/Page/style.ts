import styled from "styled-components";
import { indentsConstructor, Indent } from "../../ui";

export const StyledPage = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  ${indentsConstructor.create(Indent.MT, 1)}
  ${indentsConstructor.create(Indent.MB, 1)}
`;
