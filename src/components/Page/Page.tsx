import { StyledSearchPage } from "./style";

interface IProps {
  children: JSX.Element;
}

export const Page = ({ children }: IProps) => {
  return <StyledSearchPage>{children}</StyledSearchPage>;
};
