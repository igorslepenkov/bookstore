import { ReactNode } from "react";
import { StyledFormWrapper } from "./style";

interface IProps {
  children: ReactNode;
}

export const FormWrapper = ({ children }: IProps) => {
  return <StyledFormWrapper>{children}</StyledFormWrapper>;
};
