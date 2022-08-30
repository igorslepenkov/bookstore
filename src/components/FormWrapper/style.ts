import styled from "styled-components";
import { Color, Media } from "../../ui";

export const StyledFormWrapper = styled.div`
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
