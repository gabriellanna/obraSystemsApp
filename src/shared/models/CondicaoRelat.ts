import { Relatorio } from "./Relatorio";



export class CondicaoRelat {
  id!: number;
  data!: Date;
  manha!: string;
  tarde!: string;
  relatorioId!: number;
  relatorio!: Relatorio;
}
