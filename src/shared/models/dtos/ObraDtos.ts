

export class ObraResponseDto {
  id!: number;
  nome!: string;
  empresaId!: number;
  localDaObra!: string;
  nomeCliente?: string;
  imgPerfil?: string
  contrato?: string;
  prazoContratual?: string;
  totalImagens?: number;
  totalRelatorios?: number;
}


export class ObraInputDataDto {
  nome!: string;
  localDaObra!: string;
  nomeCliente?: string;
  imgPerfil?: string
  contrato?: string;
  prazoContratual?: string;
}


export class ObraInsertDto {
  nome!: string;
  empresaId!: number;
  localDaObra!: string;
  nomeCliente?: string;
  imgPerfil?: string
  contrato?: string;
  prazoContratual?: string;
}



export class ObraUpdateDto {
  id?: number;
  nome?: string;
  empresaId?: number;
  localDaObra?: string;
  nomeCliente?: string;
  imgPerfil?: string
  contrato?: string;
  prazoContratual?: string;
}