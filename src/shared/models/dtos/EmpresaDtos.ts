import { ObraResponseDto } from "./ObraDtos";
import { UserResponseDto } from "./UserDtos";

export class EmpresaInsertDto {
  nome!: string;
}

export class EmpresaResponseDto {
  id!: number;
  nome!: string;
  fotoPerfil?: string;
  users?: UserResponseDto[];
  obras?: ObraResponseDto[];
  condicoes?: CondicaoResponseDto[];
  tempos?: TempoResponseDto[];
  cargos?: CargoResponseDto[];
}

export class EmpresaCreateResponseDto {
  id!: number;
  nome!: string;
}

export class EmpresaUpdateDto {
  nome!: string;
}




export class CondicaoResponseDto {
  id!: number;
  nome!: string;
}
export class TempoResponseDto {
  id!: number;
  nome!: string;
}
export class CargoResponseDto {
  id!: number;
  nome!: string;
}