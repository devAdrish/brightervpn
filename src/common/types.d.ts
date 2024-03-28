type JObj = Record<string, any>;

interface RtkHttpError extends FetchBaseQueryError {
  data: JObj;
}