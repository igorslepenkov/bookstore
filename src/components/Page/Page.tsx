import { StyledPage } from "./style";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const Page = ({ children }: IProps) => {
  return <StyledPage>{children}</StyledPage>;
};
