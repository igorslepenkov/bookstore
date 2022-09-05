import { ChangeEventHandler } from "react";
import { StyledSearch } from "./style";

interface IProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Search = (props: IProps) => {
  return <StyledSearch type="text" placeholder="Search" {...props} />;
};
