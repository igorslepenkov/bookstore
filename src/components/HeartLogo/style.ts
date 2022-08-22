import styled from "styled-components";
import { HeartLogo as Logo } from "../../assets";
import { Media } from "../../ui";

export const StyledLogo = styled(Logo)`
  display: none;

  @media (${Media.MD}) {
    display: block;
  }
`;
