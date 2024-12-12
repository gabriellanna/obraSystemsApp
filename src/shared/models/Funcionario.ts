import { Obra } from "./Obra";
import { CargoFunc } from "./CargoFunc";
import { ContatoFunc } from "./ContatoFunc";
import { EnderecoFunc } from "./EnderecoFunc";
import { DocumentoFunc } from "./DocumentoFunc";
import { EGeneroFunc } from "./enums/EGeneroFunc";



export class Funcionario {
  id!: number;
  nome!: string;
  dataNascimento!: string;
  genero!: EGeneroFunc;
  cargoFuncs?: CargoFunc[];
  documentoFuncs?: DocumentoFunc[];
  contatoFuncs?: ContatoFunc[];
  enderecoFuncs?: EnderecoFunc[];
  obraId!: number;
  obra!: Obra;
}
