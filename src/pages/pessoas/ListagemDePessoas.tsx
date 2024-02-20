import { useEffect, useMemo, useRef, useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { IListagemPessoa, PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { useDebounce } from "../../shared/hooks";


export const ListagemDePessoas: React.FC = () => {
  const doubleFetch = useRef(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(3000, true);

  const [rows, setRows] = useState<IListagemPessoa[]>();
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);


  useEffect(() => {
    if (!doubleFetch.current) {
      setIsLoading(true);

      debounce(() => {
        PessoasService.getAll()
          .then((result) => {
            setIsLoading(false);

            if (result instanceof Error) {
              alert(result.message);
            } else {
              console.log(result?.data);
              setRows(result?.data);
            }
          });
      });

    }
    doubleFetch.current = true;
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
      <TableContainer component={Paper} variant='outlined' sx={{ m: 1, width: 'auto' }}>
        <Table>
          <TableHead>

            <TableRow>
              <TableCell>Ações</TableCell> <TableCell>Nome completo</TableCell> <TableCell>Email</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>

            {rows?.map(row => (
              <TableRow key={row.id}>
                <TableCell>Ações</TableCell> <TableCell>{row.nomeCompleto}</TableCell> <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  )
}