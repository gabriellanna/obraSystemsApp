import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./routes";
import { AppThemeProvider, useAppThemeContext } from "./shared/contexts/ThemeContext";
import MenuLateral from "./shared/components/menu-lateral/MenuLateral";
import { Button } from "@mui/material";

export const App = () => {

  const { toggleTheme } = useAppThemeContext();

  return (
    <AppThemeProvider>
      <BrowserRouter>

        <MenuLateral>
          <Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>
          <p>clique</p>
        </MenuLateral>

        <AppRouters />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
