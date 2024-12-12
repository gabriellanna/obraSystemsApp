import { EmpresaResponseDto } from "./EmpresaDtos";
import { RoleResponseDto } from "./RoleDtos";

// export class UserCreate {
//   nome!: string;
//   email!: string;
//   password!: string;
// }

export class UserInsertDto {
  nome!: string;
  email!: string;
  password!: string;
  isAdmin!: boolean;
  empresaId!: number;
}

export class UserFirstInsertDto {
  nome!: string;
  email!: string;
  password!: string;
  nomeEmpresa!: string;
}

export class UserResponseDto {
  id!: number;
  nome!: string;
  email!: string;
  isAdmin!: boolean;
  empresaId!: number;
  roles?: RoleResponseDto[];
  empresa?: EmpresaResponseDto;
}

export class UserResponseLoginDto {
  token!: string;
  user!: UserResponseDto;
}



