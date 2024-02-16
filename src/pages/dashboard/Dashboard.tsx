import { Button } from "@mui/material";
import { useAppThemeContext } from "../../shared/contexts";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";
//import FerramentasDaListagem from "../../shared/components/ferramentas-da-listagem/BarraDeFerramentas";
import FerramentasDeDetalhe from "../../shared/components/ferramentas-de-detalhe/FerramentasDeDetalhe";

const Dashboard = () => {

    const { toggleTheme } = useAppThemeContext();
    
  return (
    <LayoutBaseDePagina 
        titulo="Página inicial" 
        barraDeFerramentas={(
            <FerramentasDeDetalhe
             mostrarBotaoSalvarEFechar
            />
        )}
    >
        <Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>
    </LayoutBaseDePagina>
  )
}

export default Dashboard;