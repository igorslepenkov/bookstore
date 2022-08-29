import { firebaseResetPasswordUrl } from "../regex";

export const getFirebaseParamsFromUrl = (
  url: string
): { mode: string; oobCode: string } | { mode: null; oobCode: null } => {
  const match = url.match(firebaseResetPasswordUrl);
  if (match) {
    return { mode: match[1], oobCode: match[2] };
  } else {
    return { mode: null, oobCode: null };
  }
};
