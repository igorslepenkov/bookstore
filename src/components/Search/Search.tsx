import { ChangeEventHandler, KeyboardEventHandler } from "react";
import { StyledSearch } from "./style";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement | SVGSVGElement>;
}

export const Search = (props: IProps) => {
  return <StyledSearch type="text" placeholder="Search" {...props} />;
};
