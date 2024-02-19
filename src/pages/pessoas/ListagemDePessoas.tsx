import { useSearchParams } from "react-router-dom"
import FerramentasDaListagem from "../../shared/components/ferramentas-da-listagem/FerramentasDaListagem"
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina"
import { useEffect, useMemo, useRef } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebounce } from "../../shared/hooks";


export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(3000, true);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const funcaoChamada = useRef(false);
  useEffect(() => {
    if (!funcaoChamada.current) {
      
      debounce(() => {
        PessoasService.getAll()
          .then((result) => {
            if (result instanceof Error) {
              alert(result.message);
            } else {
              console.log(result);
            }
          });
      });

    }
    funcaoChamada.current = true;
  }, [busca]);

  return (
    <LayoutBaseDePagina 
      titulo="Listagem de pessoas"
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoDaBusca={busca}
          textoBotaoNovo="Nova"
          aoMudarTextDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      }
    >
      teste
    </LayoutBaseDePagina>
  )
}