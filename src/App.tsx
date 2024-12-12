import { BrowserRouter } from "react-router-dom";

import './shared/forms/TraducoesYup'; // Garantindo que o codigo YUP será executado pela aplicação. sem isso ele não funcionará

import { AppThemeProvider, AuthProvider, DrawerProvider } from "./shared/contexts";
import { AppRouters } from "./routes";

export const App = () => {

  return (
    <AuthProvider>
      <AppThemeProvider>

          <DrawerProvider>
            <BrowserRouter>
              
                <AppRouters />

            </BrowserRouter>
          </DrawerProvider>

      </AppThemeProvider>
    </AuthProvider>
  );
}

export default App;
