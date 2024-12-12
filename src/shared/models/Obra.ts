import { Empresa } from "./Empresa";
import { Relatorio } from "./Relatorio";
import { Atividade } from "./Atividade";
import { Funcionario } from "./Funcionario";
import { Equipamento } from "./Equipamento";



export class Obra {
  id!: number;
  nome!: string;
  empresaId!: number;
  empresa!: Empresa;
  localDaObra!: string;
  nomeCliente!: string;
  imgPerfil!: string;
  contrato!: string;
  prazoContratual!: string;
  atividades?: Atividade[];
  funcionarios?: Funcionario[];
  relatorios?: Relatorio[];
  equipamentos?: Equipamento[];
}
