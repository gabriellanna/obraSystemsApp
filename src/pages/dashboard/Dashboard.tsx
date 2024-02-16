import { Button } from "@mui/material";
import { useAppThemeContext } from "../../shared/contexts";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";

const Dashboard = () => {

    const { toggleTheme } = useAppThemeContext();
    
  return (
    <LayoutBaseDePagina titulo="Página inicial" barraDeFerramentas={<>Barra de Ferramentas TEXT</>}>
        <Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>
    </LayoutBaseDePagina>
  )
}

export default Dashboard;