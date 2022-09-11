import React, { ReactNode } from "react";
import { StyledFormServerMessage } from "./style";

interface IProps {
  children: ReactNode;
}

export const FormServerMessage = ({ children }: IProps) => {
  return <StyledFormServerMessage>{children}</StyledFormServerMessage>;
};
