import { StyledTitleH1, StyledTitleH2, StyledTitleH3 } from "./style";

interface IProps {
  titleGrade: number;
  text: string;
}

export const Title = ({ titleGrade, text }: IProps) => {
  if (titleGrade === 1) {
    return <StyledTitleH1>{text}</StyledTitleH1>;
  } else if (titleGrade === 2) {
    return <StyledTitleH2>{text}</StyledTitleH2>;
  } else {
    return <StyledTitleH3>{text}</StyledTitleH3>;
  }
};
