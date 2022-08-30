import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const ErrorNotification = styled.p`
  ${fonts.bodyBold}
  color: ${Color.Danger};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
