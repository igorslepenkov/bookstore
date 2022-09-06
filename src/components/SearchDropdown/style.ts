import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const StyledSearchDropdown = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  border: 1px solid #e7e7e7;
  background-color: ${Color.White};
`;

export const StyledLink = styled(Link)`
  ${fonts.bodyRegular}
  color: ${Color.Grey};
  text-decoration: none;
  text-align: center;
`;

export const BookSearchCard = styled.li`
  display: grid;
  grid-template-columns: 85px auto;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e7e7e7;
  text-align: center;
`;

export const SearchCardBookImageWrapper = styled.div`
  width: 80px;
  height: 60px;
  padding: 0 10px;
`;

export const SearchCardBookImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NotFoundNotification = styled.div`
  ${fonts.bodyRegular}
  color: ${Color.Grey};
  align-self: center;
  justify-self: center;
`;
