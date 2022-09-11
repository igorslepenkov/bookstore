import { ReactNode } from "react";
import { InputLabel } from "./style";

interface iProps {
  htmlFor: string;
  children: ReactNode;
  gridArea?: string;
}

export const FormInputLabel = ({ htmlFor, children, gridArea }: iProps) => {
  return (
    <InputLabel htmlFor={htmlFor} gridArea={gridArea}>
      {children}
    </InputLabel>
  );
};
