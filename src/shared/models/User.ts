import { Role } from "./Role";
import { Empresa } from "./Empresa";



export class User {
  id!: number;
  nome!: string;
  email!: string;
  password!: string;
  isAdmin!: boolean;
  empresaId!: number;
  empresa!: Empresa;
  roles?: Role[];
}
