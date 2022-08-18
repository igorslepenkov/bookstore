import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, indentsConstructor, Indent } from "../../ui";
import { fonts } from "../../ui";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledBookListItem = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BookImageWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${Color.Blue};
  ${indentsConstructor.create(Indent.MB, 6)}
`;

export const StyledTitle = styled.h3`
  flex-grow: 1;
  margin: 0;
  ${fonts.h3}
  color: ${Color.Black};
`;

export const BookImage = styled.img`
  width: 100%;
`;

export const BookAuthorsAndPublisher = styled.p`
  ${indentsConstructor.create(Indent.MB, 3)}
  ${indentsConstructor.create(Indent.MT, 8)}
  ${fonts.bodyRegular}
  color: ${Color.Grey};
`;

export const BookCostAndRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${indentsConstructor.create(Indent.MB, 2)}
`;

export const BookCost = styled.p`
  margin: 0;
  ${fonts.bodyBold}
  color: ${Color.Black};
`;
