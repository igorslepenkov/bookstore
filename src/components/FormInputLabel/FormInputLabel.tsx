import { ReactNode } from "react";
import { InputLabel } from "./style";

interface iProps {
  htmlFor: string;
  children: ReactNode;
}

export const FormInputLabel = ({ htmlFor, children }: iProps) => {
  return <InputLabel htmlFor={htmlFor}>{children}</InputLabel>;
};
