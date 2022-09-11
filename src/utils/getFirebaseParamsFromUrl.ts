import { firebaseResetPasswordUrl } from "../regex";

export const getFirebaseParamsFromUrl = (url: string): string | null => {
  const match = url.match(firebaseResetPasswordUrl);
  if (match && match.length > 1) {
    return match[1];
  } else {
    return null;
  }
};
