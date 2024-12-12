import { Empresa } from "./Empresa";



export class Tempo {
  id!: number;
  nome!: string;
  empresaId!: number;
  empresa!: Empresa;
}
