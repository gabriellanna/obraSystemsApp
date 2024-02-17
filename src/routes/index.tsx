import { Button } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import { ListagemDeCidade } from "../pages";

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
                icon: 'location_city',
                path: '/cidades',
                label: 'Cidades'
            },
            {
                icon: 'start',
                path: '/pagina-inicial2',
                label: 'Sair'
            }
        ])
    }, [setDrawerOptions])

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />

            <Route path="/cidades" element={<ListagemDeCidade />} />
            
            {/* <Route path="/cidades/detalhe/:id" element={<Dashboard />} /> */}

            <Route path="*" element={<Button variant='outlined' color="primary" onClick={() => Nav("/pagina-inicial")}>Ir para Página inicial</Button>} />
        </Routes>
    );
};