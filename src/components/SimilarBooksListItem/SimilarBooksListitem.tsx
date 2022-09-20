import { IBook } from "../../types";
import { BookImage, BookImageWrapper, StyledBookListItem, StyledLink, StyledTitle } from "./style";
import { createDinamicPath } from "../../utils";
import { RoutesUrl } from "../../router";
import { resolvePath } from "react-router-dom";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface IProps {
  book: IBook;
}

export const SimilarBooksListItem = ({ book }: IProps) => {
  const [variant, setVariant] = useState<"hidden" | "visible">("hidden");
  const ref = useRef(null);
  const inView = useInView(ref);
  const variants = {
    visible: { opacity: 1, translateX: 0, scale: 1, transition: { duration: 1.2 } },
    hidden: { opacity: 0, scale: 0, translateX: 150 },
  };

  useEffect(() => {
    if (inView) {
      setVariant("visible");
    } else {
      setVariant("hidden");
    }
  }, [inView]);

  return (
    <StyledBookListItem ref={ref} variants={variants} animate={variant}>
      <StyledLink to={resolvePath(createDinamicPath(RoutesUrl.BOOK, book.isbn13))}>
        <BookImageWrapper>
          <BookImage src={book.image} />
        </BookImageWrapper>
        <StyledTitle>{book.title}</StyledTitle>
      </StyledLink>
    </StyledBookListItem>
  );
};
