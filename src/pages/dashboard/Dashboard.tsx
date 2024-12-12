import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { ListagemFotograficas } from "./sections/Dashboard-ListagemFotograficas";
import { ListagemRelatorios } from "./sections/Dashboard-ListagemRelatorios";
import FlexBox from "../../shared/components/divs/flexBox";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { DashCard } from "./components/DashCard";
import { useNavigate, useParams } from "react-router-dom";
import { ObraService } from "../../shared/services/api/obras/ObrasService";
import { Obra } from "../../shared/models/Obra";



export const Dashboard = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [obra, setObra] = useState<Obra>();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();

  useEffect(() => {
    setIsLoading(true);

    ObraService.getById(Number(id)).then(result => {
      if(result.success) {
        setObra(result.data);
      } else {
        alert(result);
        navigate('/obras');
      }
    });
    
    setIsLoading(false);
  }, []);

  if (id && obra?.id !== 0)
  return (
    <LayoutBaseDePagina
      titulo={obra?.nome ?? "Página Inicial"}
    //  barraDeFerramentas={<FerramentasDaListagem mostrarBotaoNovo={false} />}
    >
      <Box width='100%' display='flex'>
        <Grid container margin={2} direction="column" spacing={4}>

          <Grid item container spacing={4} direction="row">

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <DashCard 
                value={9}
                title="Relatórios"
                icon="receipt_long"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <DashCard 
                value={23}
                title="Atividades"
                icon="format_list_numbered"
              />
            </Grid>
            
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <DashCard 
                value={3}
                title="Ocorrências"
                icon="report"
              />
            </Grid>
            
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <DashCard 
                value={34}
                title="Fotos"
                icon="photo_library"
              />
            </Grid>
          </Grid>


          <Grid item container spacing={4} direction="row">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              
              <ListagemRelatorios />

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

              <ListagemFotograficas />

            </Grid>
          </Grid>


        </Grid>
      </Box>
    </LayoutBaseDePagina>
  )
  else
  return (
    <FlexBox>
      ERROR
    </FlexBox>
  );
};