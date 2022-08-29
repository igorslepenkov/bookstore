import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useIsUserSignedIn = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(true);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserSignedIn(true);
      } else {
        setIsUserSignedIn(false);
      }
    });
  }, [auth]);

  return isUserSignedIn;
};
