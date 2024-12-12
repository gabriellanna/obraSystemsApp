export interface IResponseAmount<T> {
  amount: number;
  pageSize: number;
  data: T;
  page: number;
};