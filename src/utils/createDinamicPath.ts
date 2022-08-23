import { RoutesUrl } from "../router";

export const createDinamicPath = (endpoint: RoutesUrl, key: string) => {
  return endpoint.replace(/:\w+/, key);
};
