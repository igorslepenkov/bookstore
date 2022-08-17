import { css } from "styled-components";
import { Media } from "./media";

const h1 = css`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-transform: uppercase;

  @media (${Media.MD}) {
    font-size: 56px;
    line-height: 64px;
  }
`;

const h2 = css`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  text-transform: uppercase;

  @media (${Media.MD}) {
    font-size: 40px;
    line-height: 60px;
  }
`;

const h3 = css`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;

  @media (${Media.MD}) {
    font-size: 40px;
    line-height: 60px;
  }
`;

const subline = css`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
`;

const bodyRegular = css`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;

const bodyBold = css`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const fonts = { h1, h2, h3, subline, bodyRegular, bodyBold };
