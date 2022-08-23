import styled from "styled-components";
import { css } from "styled-components";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

interface ITabProps {
  active: boolean;
}

export const StyledBookDetailsTabs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  overflow: hidden;
`;

export const Tab = styled.li`
  flex-grow: 1;
  ${({ active }: ITabProps) => {
    if (active) {
      return css`
        ${fonts.bodyBold}
        color: ${Color.Black};
        border-bottom: 2px solid ${Color.Black};
      `;
    } else {
      return css`
        ${fonts.bodyRegular}
        color: ${Color.Grey};
        border-bottom: 1px solid ${Color.Grey};
      `;
    }
  }}
  text-align: center;
  cursor: pointer;
`;

export const TabContent = styled.div`
  ${indentsConstructor.create(Indent.MT, 3)}
  ${indentsConstructor.create(Indent.MB, 3)}
`;

export const TabContentText = styled.p`
  ${fonts.bodyRegular}
  color: ${Color.Black};
`;
