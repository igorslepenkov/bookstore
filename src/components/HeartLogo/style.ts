import styled from "styled-components";
import {
  FavoritesActiveIcon as ActiveLogo,
  HeartLogoIcon as Logo,
} from "../../assets";
import { Media } from "../../ui";

export const StyledLogo = styled(Logo)`
  display: none;

  ${Media.MD} {
    display: block;
  }
`;

export const StyledActiveLogo = styled(ActiveLogo)`
  display: none;

  ${Media.MD} {
    display: block;
  }
`;
