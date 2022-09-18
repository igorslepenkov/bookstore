import styled from "styled-components";
import { StarIcon } from "../../assets";
import { GreyStarIcon } from "../../assets";
import { Color } from "../../ui";

export const StyledBookRating = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledStarIcon = styled(StarIcon)`
  rect {
    fill: ${Color.White};
  }

  path {
    fill: ${Color.Orange};
  }
`;

export const StyledGreyStarIcon = styled(GreyStarIcon)`
  rect {
    fill: ${Color.White};
  }
`;
