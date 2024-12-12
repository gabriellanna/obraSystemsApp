import { Relatorio } from "./Relatorio";
import { User } from "./User";



export class ComentarioRelat {
  id!: number;
  descricao!: string;
  userId!: number;
  user!: User;
  relatorioId!: number;
  relatorio!: Relatorio;
}
