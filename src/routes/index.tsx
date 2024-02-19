import { Button } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import { ListagemDePessoas } from "../pages";

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
                icon: 'people',
                path: '/pessoas',
                label: 'Pessoas'
            },
            {
                icon: 'start',
                path: '/pagina-inicial2',
                label: 'Sair'
            }
        ])
    }, [setDrawerOptions]);

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />

            <Route path="/pessoas" element={<ListagemDePessoas />} />
            
            {/* <Route path="/pessoas/detalhe/:id" element={<Dashboard />} /> */}

            <Route path="*" element={<Button variant='outlined' color="primary" onClick={() => Nav("/pagina-inicial")}>Ir para Página inicial</Button>} />
        </Routes>
    );
};