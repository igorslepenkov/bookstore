import styled from "styled-components";
import { Media } from "../../ui";

export const StyledMainTemplate = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1120px;
  margin: auto;

  ${Media.XS} {
    padding: 0 24px;
  }
`;

export const OutletWrapper = styled.div`
  flex-grow: 1;
`;
