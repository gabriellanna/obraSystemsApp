import { ETipoContatoFunc } from "./enums/ETipoContatoFunc";
import { Funcionario } from "./Funcionario";



export class ContatoFunc {
  id!: number;
  valor!: string;
  tipo!: ETipoContatoFunc;
  funcionarioId!: number;
  funcionario!: Funcionario;
}
