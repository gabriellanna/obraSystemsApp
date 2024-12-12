import { EStatusAtividadeRelat } from "./enums/EStatusAtividadeRelat";
import { Relatorio } from "./Relatorio";



export class AtividadeRelat {
  id!: number;
  descricao!: string;
  status!: EStatusAtividadeRelat;
  relatorioId!: number;
  relatorio!: Relatorio;
}
