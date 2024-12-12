import { Empresa } from "./Empresa";



export class Condicao {
  id!: number;
  nome!: string;
  empresaId!: number;
  empresa!: Empresa;
}
