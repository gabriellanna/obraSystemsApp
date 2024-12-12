import { ERoleLevel } from "./enums/ERoleLevel";
import { Obra } from "./Obra";
import { User } from "./User";



export class Role {
  id!: number;
  nome!: string;
  level!: ERoleLevel;
  userId!: number;
  user!: User;
  obraId!: number;
  obra!: Obra;
}
