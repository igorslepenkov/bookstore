import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/person.svg";
import { Media } from "../../ui";

export const StyledLogo = styled(Logo)`
  display: none;

  @media (${Media.MD}) {
    display: block;
  }
`;
