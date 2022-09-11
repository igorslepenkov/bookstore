import { StyledTitleH1, StyledTitleH2, StyledTitleH3 } from "./style";

interface IProps {
  titleGrade: number;
  text: string;
  gridArea?: string;
}

export const Title = ({ titleGrade, text, gridArea }: IProps) => {
  if (titleGrade === 1) {
    return <StyledTitleH1 gridArea={gridArea}>{text}</StyledTitleH1>;
  } else if (titleGrade === 2) {
    return <StyledTitleH2 gridArea={gridArea}>{text}</StyledTitleH2>;
  } else {
    return <StyledTitleH3 gridArea={gridArea}>{text}</StyledTitleH3>;
  }
};
