import { Obra } from "./Obra";
import { Relatorio } from "./Relatorio";



export class FotoRelat {
  id!: number;
  descricao!: string;
  base64!: string;
  obraId!: number;
  obra!: Obra;
  relatorioId!: number;
  relatorio!: Relatorio;
}
