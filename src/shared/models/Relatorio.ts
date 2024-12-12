import { Obra } from "./Obra";
import { FotoRelat } from "./FotoRelat";
import { TempoRelat } from "./TempoRelat";
import { CondicaoRelat } from "./CondicaoRelat";
import { AtividadeRelat } from "./AtividadeRelat";
import { ComentarioRelat } from "./ComentarioRelat";
import { OcorrenciaRelat } from "./OcorrenciaRelat";
import { EquipamentoRelat } from "./EquipamentoRelat";



export class Relatorio {
  id!: number;
  nome!: string;
  numRDO!: string;
  dataDoRelatorio!: Date;
  obraId!: number;
  obra!: Obra;
  ocorrenciaRelats?: OcorrenciaRelat[];
  atividadeRelats?: AtividadeRelat[];
  comentarioRelats?: ComentarioRelat[];
  fotoRelats?: FotoRelat[];
  equipamentoRelats?: EquipamentoRelat[];
  tempoRelats?: TempoRelat[];
  condicaoRelats?: CondicaoRelat[];
}
