import { Button } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRouters = () => {

    const { toggleTheme } = useAppThemeContext();
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();
    const Nav = useNavigate();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página Inicial'
            },
            {
                icon: 'star',
                path: '/pagina-inicial3',
                label: 'Lugares'
            },
            {
                icon: 'start',
                path: '/pagina-inicial2',
                label: 'Cidades'
            }
        ])
    }, [])

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