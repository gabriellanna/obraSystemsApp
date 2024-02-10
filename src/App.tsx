import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
