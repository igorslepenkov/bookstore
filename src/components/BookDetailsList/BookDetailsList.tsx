import { BookDetailType } from "../../types";
import {
  BookDetail,
  BookDetailTitle,
  BookDetailValue,
  StyledBookDetailsList,
} from "./style";

interface IProps {
  bookDetailsArray: BookDetailType[];
}

export const BookDetailsList = ({ bookDetailsArray }: IProps) => {
  return (
    <StyledBookDetailsList>
      {bookDetailsArray.map((bookDetail) => {
        return (
          <BookDetail key={bookDetail[0]}>
            <BookDetailTitle>{bookDetail[0]}</BookDetailTitle>
            <BookDetailValue>{bookDetail[1]}</BookDetailValue>
          </BookDetail>
        );
      })}
    </StyledBookDetailsList>
  );
};
