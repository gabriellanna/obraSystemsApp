import { Environment } from "../../environment";
// import { Role } from "../../models/Role";
import { User } from "../../models/User";
import * as CryptoJS from 'crypto-js';

const TOKEN_KEY = 'auth-token';
const REFRESH_TOKEN_KEY = 'auth-refresh-token';
const REFRESH_TOKEN_QNT = 'auth-refresh-token-qnt';
const USER_KEY = 'auth-user';
// const ROLES_KEY = 'auth-roles';

export class StorageService {
  password = Environment.PASSWORD_CRIPTO ?? '';
  constructor() { }

  public signOut(reload: boolean = true) {
    localStorage.clear();
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_QNT);
    // sessionStorage.removeItem(ROLES_KEY);

    if (reload) window.location.reload();
  }

  public saveToken(token: string) {
    this.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return this.getItem<string>(TOKEN_KEY);
  }

  public saveRefreshToken(token: string) {
    this.setItem(REFRESH_TOKEN_KEY, token);
  }

  public getRefreshToken() {
    return this.getItem<string>(REFRESH_TOKEN_KEY);
  }

  public saveUser(user: User) {
    this.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    const user = this.getItem<User>(USER_KEY);
    return user ?? { id: 0 };
  }

  // public saveRoles(roles: Role[]) {
  //   this.setItem(ROLES_KEY, JSON.stringify(roles));
  // }

  // public getRoles() {
  //   const roles = this.getItem<Role[]>(ROLES_KEY);
  //   return roles;
  // }

  public saveQntRefreshToken(qnt: number) {
    this.setItem(REFRESH_TOKEN_QNT, JSON.stringify(qnt));
  }

  public getQntRefreshToken() {
    const qnt = this.getItem<number>(REFRESH_TOKEN_QNT);
    return qnt ?? 0;
  }


  getItem<T>(key: string): T {
    const criptografed = localStorage.getItem(key);
    if (!criptografed) return null as T;
    const model: any = CryptoJS.AES.decrypt(
      criptografed!,
      this.password
    ).toString(CryptoJS.enc.Utf8);
    if (!this.isJson(model)) return model;
    return model ? (JSON.parse(model) as T) : (null as T);
  }

  setItem(key: string, value: string) {
    const encrypt = CryptoJS.AES.encrypt(value, this.password);
    localStorage.removeItem(key);
    localStorage.setItem(key, encrypt.toString());
  }

  isJson(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}