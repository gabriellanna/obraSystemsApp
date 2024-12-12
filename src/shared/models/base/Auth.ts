import { User } from "../User";


export interface Auth {
  authenticated: boolean;
  expiration: Date;
  accessToken: string;
  refreshToken: string;
  data: User;
}