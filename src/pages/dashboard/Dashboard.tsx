import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";
import { FerramentasDeDetalhe } from "../../shared/components";

export const Dashboard = () => {

    
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
  );
};