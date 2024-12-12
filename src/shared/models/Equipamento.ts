import { EProvenienciaEquipamento } from "./enums/EProvenienciaEquipamento";
import { Obra } from "./Obra";



export class Equipamento {
  id!: number;
  nome!: string;
  proveniencia!: EProvenienciaEquipamento;
  obraId!: number;
  obra!: Obra;
}
