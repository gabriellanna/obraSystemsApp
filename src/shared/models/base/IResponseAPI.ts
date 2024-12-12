export interface IResponseAPI<T> {
    success: boolean;
    message: string;
    data: T;
    errors: string[];
  }
  