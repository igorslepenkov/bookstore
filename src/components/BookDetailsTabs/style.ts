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
  list-style: none;
  overflow: hidden;
`;

export const Tab = styled.li`
  ${({ active }: ITabProps) => {
    if (active) {
      return css`
        ${fonts.bodyBold}
        color: ${Color.Black};
      `;
    } else {
      return css`
        ${fonts.bodyRegular}
        color: ${Color.Grey};
      `;
    }
  }}
  text-align: center;
`;

export const TabContent = styled.p`
  ${indentsConstructor.create(Indent.MT, 3)}
  ${indentsConstructor.create(Indent.MB, 3)}
  ${fonts.bodyRegular}
  color: ${Color.Black};
`;
