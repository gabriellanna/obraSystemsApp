import { EProvenienciaEquipamento } from "./enums/EProvenienciaEquipamento";
import { Relatorio } from "./Relatorio";



export class EquipamentoRelat {
  id!: number;
  nome!: string;
  quantidade!: string;
  proveniencia!: EProvenienciaEquipamento;
  relatorioId!: number;
  relatorio!: Relatorio;
}
