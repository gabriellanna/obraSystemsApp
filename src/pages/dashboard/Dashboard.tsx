import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";
import { FerramentasDeDetalhe } from "../../shared/components";

const Dashboard = () => {

    
  return (
    <LayoutBaseDePagina 
        titulo="Página inicial" 
        barraDeFerramentas={(
            <FerramentasDeDetalhe
              mostrarBotaoSalvarEFechar
            />
        )}
    >
      Testando
    </LayoutBaseDePagina>
  )
}

export default Dashboard;