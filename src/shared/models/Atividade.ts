import { Obra } from "./Obra";



export class Atividade {
  id!: number;
  nome!: string;
  obraId!: number;
  obra!: Obra;
}
