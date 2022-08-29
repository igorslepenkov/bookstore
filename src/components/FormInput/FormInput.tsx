import React from "react";
import { Input } from "./style";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => <Input {...props} ref={ref} />
);
