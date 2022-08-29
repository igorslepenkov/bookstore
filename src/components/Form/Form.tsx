import React, { ReactNode } from "react";
import { UseFormHandleSubmit } from "react-hook-form";
import { StyledForm } from "./style";

interface IProps {
  children: ReactNode;
  onSubmit: () => void;
}

export const Form = ({ children, onSubmit }: IProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};
