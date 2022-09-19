import { useEffect } from "react";
import { resolvePath, useNavigate, useParams } from "react-router-dom";
import { BookListPagination, BooksList, Page } from "../../components";
import { Title } from "../../components";
import { LoaderWindow } from "../../components/LoaderWindow";
import { RoutesUrl } from "../../router";
import {
  fetchBooksBySearch,
  getSearchBooks,
  getSearchBooksIsLoading,
  getSearchBooksPage,
} from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const SearchPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const books = useAppSelector(getSearchBooks);
  const loading = useAppSelector(getSearchBooksIsLoading);
  const currentPage = useAppSelector(getSearchBooksPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.pattern && currentPage) {
      navigate(
        resolvePath(
          RoutesUrl.SEARCH.replace(/:pattern/, params.pattern).replace(
            /:page/,
            currentPage.toString()
          )
        )
      );
    }
  }, [currentPage, navigate, params.pattern]);

  useEffect(() => {
    if (params.pattern && params.page) {
      dispatch(fetchBooksBySearch({ searchValue: params.pattern, page: Number(params.page) }));
    }
  }, [params.page, dispatch, params.pattern]);

  if (loading) {
    return <LoaderWindow loading={loading} />;
  }

  return (
    <Page>
      <Title titleGrade={1} text={`"${params.pattern}" search result`} />
      <BooksList books={books || []} />
      <BookListPagination />
    </Page>
  );
};
