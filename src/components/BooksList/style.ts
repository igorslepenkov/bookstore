import styled from "styled-components";
import { Media } from "../../ui";

export const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  padding: 0;
  list-style: none;

  @media (${Media.SM_MD}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
  }
`;
