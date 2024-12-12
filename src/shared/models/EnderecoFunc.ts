import { Funcionario } from "./Funcionario";



export class EnderecoFunc {
  id!: number;
  complemento!: string;
  numeroCasa!: string;
  cep!: string;
  rua!: string;
  bairro!: string;
  cidade!: string;
  estado!: string;
  pais!: string;
  funcionarioId!: number;
  funcionario!: Funcionario;
}
