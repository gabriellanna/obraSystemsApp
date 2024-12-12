import { Empresa } from "./Empresa";



export class Cargo {
  id!: number;
  nome!: string;
  empresaId!: number;
  empresa!: Empresa;
}
