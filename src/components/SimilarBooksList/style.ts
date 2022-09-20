import styled from "styled-components";
import { Indent, indentsConstructor } from "../../ui";
import { ArrowSmallLeftIcon } from "../../assets";
import { ArrowSmallRightIcon } from "../../assets";

export const StyledSimilarBooksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSimilarBooksList = styled.ul`
  display: flex;
  ${indentsConstructor.create(Indent.MT, 2)}
  gap: 32px;
  overflow-x: hidden;
`;

export const ScrollButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArrowSmallLeftButton = styled(ArrowSmallLeftIcon)`
  ${indentsConstructor.create(Indent.MT, 5)}
  cursor: pointer;
`;

export const ArrowSmallRightButton = styled(ArrowSmallRightIcon)`
  ${indentsConstructor.create(Indent.MT, 5)}
  cursor: pointer;
`;
