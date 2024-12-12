import { Relatorio } from "./Relatorio";



export class OcorrenciaRelat {
  id!: number;
  nomeTag!: string;
  descricao!: string;
  relatorioId!: number;
  relatorio!: Relatorio;
}
