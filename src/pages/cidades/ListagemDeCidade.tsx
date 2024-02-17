import { useSearchParams } from "react-router-dom"
import FerramentasDaListagem from "../../shared/components/ferramentas-da-listagem/FerramentasDaListagem"
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina"
import { useMemo } from "react";


export const ListagemDeCidade: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  return (
    <LayoutBaseDePagina 
      titulo="Listagem de cidades"
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