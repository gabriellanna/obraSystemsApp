import React, { useEffect, useState } from 'react';
import { LayoutObras } from '../../shared/layouts';
import { FerramentasDaListagem } from '../../shared/components';
import FlexBox from '../../shared/components/divs/flexBox';
import { CardObra } from './components/CardObra';
import noImg from '../../shared/assets/sem-foto.png';
import { ObraService } from '../../shared/services/api/obras/ObrasService';
import { Obra } from '../../shared/models/Obra';
import { LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';




export const ListagemDeObras: React.FC = () => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState<Obra[] | null>();

  useEffect(() => {
    setIsLoading(true);

    ObraService.getAll().then(result => {
      if (result.success) {
        setRows(result.data);
      } else {
        alert(result.errors[0]);
      }
    });

    setIsLoading(false);
  }, []);


  return (
    <LayoutObras
      titulo="Obras"
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
        // textoDaBusca={busca}
        // textoBotaoNovo="Nova"
        // aoClicarEmNovo={() => navigate('/cidades/detalhe/nova')}
        // aoMudarTextDeBusca={texto => setSearchParams({ busca: texto, pagina: '1' }, { replace: true })}
        />
      }
    >
      <FlexBox gap={20} fullWidth column>

        {isLoading &&
          <LinearProgress variant='indeterminate' />  
        }

        <FlexBox>
          {rows?.map((row) => (

            <CardObra
              key={row.id}
              title={row.nome}
              src={`${noImg}`}
              descricao={row.localDaObra}
              onClick={() => navigate(`/obras/dashboard/${row.id}`)}
            />
          ))}
        </FlexBox>

      </FlexBox>
    </LayoutObras>
  )
}
