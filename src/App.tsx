import { BrowserRouter } from "react-router-dom";
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
