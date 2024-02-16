import { Button } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import Dashboard from "../pages/dashboard/Dashboard";

export const AppRouters = () => {

    const { setDrawerOptions } = useDrawerContext();
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
    }, [setDrawerOptions])

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />
            <Route path="*" element={<Button variant='outlined' color="primary" onClick={() => Nav("/pagina-inicial")}>Ir para Página inicial</Button>} />
        </Routes>
    );
};