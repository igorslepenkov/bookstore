import { motion } from "framer-motion";
import { resolvePath } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { IBook } from "../../types";
import { Title } from "../Title";
import {
  BookSearchCard,
  NotFoundNotification,
  SearchCardBookImage,
  SearchCardBookImageWrapper,
  StyledLink,
  StyledSearchDropdown,
} from "./style";

interface IProps {
  books: IBook[];
  searchValue: string;
}

export const SearchDropdown = ({ books, searchValue }: IProps) => {
  console.log(books);
  return (
    <StyledSearchDropdown>
      {books.map((book) => {
        return (
          <StyledLink
            to={resolvePath(RoutesUrl.BOOK.replace(/:isbn/, book.isbn13))}
          >
            <BookSearchCard as={motion.div} key={book.title}>
              <SearchCardBookImageWrapper>
                <SearchCardBookImage src={book.image} alt={book.title} />
              </SearchCardBookImageWrapper>
              <Title text={book.title} titleGrade={3} />
            </BookSearchCard>
          </StyledLink>
        );
      })}

      {books.length > 0 ? (
        <StyledLink
          to={resolvePath(RoutesUrl.SEARCH.replace(/:pattern/, searchValue))}
        >
          all results
        </StyledLink>
      ) : (
        <NotFoundNotification>{`No results found for the request: ${searchValue}`}</NotFoundNotification>
      )}
    </StyledSearchDropdown>
  );
};
