import { stringify } from "qs";

// Record<string,unknown> : kiểu dữ liệu là 1 object
type objectToQueryStringParams = Record<string, unknown>;
/**
 *
 * @param obj : object
 * @returns query string
 */

export const objectToQueryString = (obj: objectToQueryStringParams) => {
  return stringify(obj, {
    addQueryPrefix: true,
  });
};
