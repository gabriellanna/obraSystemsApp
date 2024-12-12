import { Obra } from "./Obra";
import { Cargo } from "./Cargo";
import { Tempo } from "./Tempo";
import { Condicao } from "./Condicao";
import { User } from "./User";


export class Empresa {
  id!: number;
  nome!: string;
  fotoPerfil?: string;
  users?: User[];
  obras?: Obra[];
  condicoes?: Condicao[];
  tempos?: Tempo[];
  cargos?: Cargo[];
}
