import { ETipoDocumentoFunc } from "./enums/ETipoDocumentoFunc";
import { Funcionario } from "./Funcionario";



export class DocumentoFunc {
  id!: number;
  valor!: string;
  tipo!: ETipoDocumentoFunc;
  funcionarioId!: number;
  funcionario!: Funcionario;
}
