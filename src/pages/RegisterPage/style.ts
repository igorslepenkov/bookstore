import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

interface ITabProps {
  isActive: boolean;
}

export const FormTabsGroup = styled.div`
  display: flex;
`;

export const FormTab = styled.h3`
  flex-grow: 1;
  ${indentsConstructor.create(Indent.PT, 4)}
  ${indentsConstructor.create(Indent.PB, 4)}
  ${fonts.h3}
  color: ${Color.Black};
  letter-spacing: 0.05em;
  text-align: center;
  border-bottom: ${({ isActive }: ITabProps) =>
    isActive ? `2px solid ${Color.Black}` : `2px solid ${Color.GreyLight}`};
  cursor: pointer;
`;
