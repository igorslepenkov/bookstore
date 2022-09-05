import { motion } from "framer-motion";
import { resolvePath } from "react-router-dom";
import { RoutesUrl } from "../../router";
import { IBook } from "../../types";
import { Title } from "../Title";
import {
  BookSearchCard,
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
  return (
    <StyledSearchDropdown>
      {books.map((book) => {
        return (
          <BookSearchCard as={motion.div} key={book.title}>
            <SearchCardBookImageWrapper>
              <SearchCardBookImage src={book.image} alt={book.title} />
            </SearchCardBookImageWrapper>
            <Title text={book.title} titleGrade={3} />
          </BookSearchCard>
        );
      })}
      <StyledLink
        to={resolvePath(RoutesUrl.SEARCH.replace(/:pattern/, searchValue))}
      >
        all results
      </StyledLink>
    </StyledSearchDropdown>
  );
};
