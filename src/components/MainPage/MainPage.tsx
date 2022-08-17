import { useEffect, useState } from "react";
import { bookstoreApi } from "../../services";
import { IBook } from "../../types";
import { BooksList } from "../BooksList";
import { Page } from "../Page";
import { Title } from "../Title";
import ClipLoader from "react-spinners/ClipLoader";
import { AxiosError } from "axios";
import { ErrorPage } from "../ErrorPage";

export const MainPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();
  const [newBooks, setNewBooks] = useState<IBook[]>();

  useEffect(() => {
    bookstoreApi
      .getNew()
      .then((result) => {
        setNewBooks(result.books);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ClipLoader loading={loading} />;
  } else if (newBooks) {
    return (
      <Page>
        <Title titleGrade={1} text="New Releases Books" />
        <BooksList books={newBooks} />
      </Page>
    );
  } else {
    console.log(error);
    return <ErrorPage />;
  }
};
