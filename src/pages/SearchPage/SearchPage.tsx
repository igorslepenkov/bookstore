import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookListPagination, BooksList, Page } from "../../components";
import { Title } from "../../components";
import {
  fetchBooksBySearch,
  getSearchBooks,
  getSearchBooksPage,
} from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const SearchPage = () => {
  const params = useParams();
  const books = useAppSelector(getSearchBooks);
  const currentPage = useAppSelector(getSearchBooksPage);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (params.pattern && currentPage) {
      dispatch(
        fetchBooksBySearch({ searchValue: params.pattern, page: currentPage })
      );
    }
  }, [currentPage, dispatch, params.pattern]);
  return (
    <Page>
      <Title titleGrade={1} text={`"${params.pattern}" search result`} />
      <BooksList books={books || []} />
      <BookListPagination />
    </Page>
  );
};
