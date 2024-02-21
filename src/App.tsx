import { BrowserRouter } from "react-router-dom";

import './shared/forms/TraducoesYup'; // Garantindo que o codigo YUP será executado pela aplicação. sem isso ele não funcionará

import { AppRouters } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import MenuLateral from "./shared/components/menu-lateral/MenuLateral";
import { DrawerProvider } from "./shared/contexts";

export const App = () => {

  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <AppRouters />
          </MenuLateral>

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
