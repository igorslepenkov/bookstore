import React from "react";
import { Input } from "./style";

type InputStyleProps = {
  gridArea?: string;
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputStyleProps;

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <Input {...props} ref={ref} />
);
