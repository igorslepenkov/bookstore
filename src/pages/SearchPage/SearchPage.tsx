import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookListPagination, BooksList, Page } from "../../components";
import { Title } from "../../components";
import {
  fetchBooksBySearch,
  useGetSearchBooks,
  useGetSearchBooksPage,
} from "../../store";
import { useAppDispatch } from "../../store/hooks";

export const SearchPage = () => {
  const params = useParams();
  const books = useGetSearchBooks();
  const currentPage = useGetSearchBooksPage();
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
