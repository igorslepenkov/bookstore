import styled from "styled-components";
import { Color, fonts, Indent, indentsConstructor, Media } from "../../ui";

interface ITabProps {
  isActive: boolean;
}

export const FromWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  flex-direction: column;
  width: 80%;
  margin-right: auto;
  margin-left: auto;

  ${Media.MD} {
    width: fit-content;
    border: 1px solid ${Color.GreyLight};
  }
`;

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
    isActive ? `2px solid ${Color.Black}` : `1px solid ${Color.GreyLight}`};
  cursor: pointer;
`;
