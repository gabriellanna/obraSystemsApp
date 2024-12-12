import { ERoleLevel } from "../enums/ERoleLevel";



export class RoleInsertDto {
  nome!: string;
  level!: ERoleLevel;
  userId!: number;
  obraId!: number;
}


export class RoleResponseDto {
  id!: number;
  nome!: string;
  level!: ERoleLevel;
}
