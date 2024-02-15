import { Button } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";
import { useDrawerContext } from "../shared/contexts";

export const AppRouters = () => {

    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen } = useDrawerContext();
    const Nav = useNavigate();

    return(
        <Routes>
            <Route path="/pagina-inicial" element={
                <>
                    <Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>
                    <Button variant='text' color="primary" onClick={toggleDrawerOpen}>OPEN DRAWER</Button>
                </>
            } />
            <Route path="*" element={<Button variant='outlined' color="primary" onClick={() => Nav("/pagina-inicial")}>Ir para Página inicial</Button>} />
        </Routes>
    );
};