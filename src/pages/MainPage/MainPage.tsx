import { useEffect, useState } from "react";
import { bookstoreApi } from "../../services";
import { IBook } from "../../types";
import { BooksList } from "../../components";
import { Page } from "../../components";
import { Title } from "../../components";
import ClipLoader from "react-spinners/ClipLoader";
import { AxiosError } from "axios";
import { SubscribeToNewsletter } from "../../components/SubscribeToNewsletter";
import { Navigate } from "react-router-dom";
import { RoutesUrl } from "../../router";

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
        setLoading(false);
        setError(err);
      });
  }, []);

  if (error) {
    return <Navigate to={RoutesUrl.ERROR} replace={false} />;
  }

  if (loading) {
    return <ClipLoader loading={loading} />;
  }

  return (
    <Page>
      <Title titleGrade={1} text="New Releases Books" />
      <BooksList books={newBooks || []} />
      <SubscribeToNewsletter />
    </Page>
  );
};
