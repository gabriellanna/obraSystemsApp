import { Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import { useAuthContext, useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import {
    Dashboard,
    DetalheDePessoas,
    ListagemDePessoas,
    DetalheDeCidades,
    ListagemDeCidades,
    ListagemDeObras,
    Login
} from "../pages";
import { MenuLateral } from "../shared/components";

export const AppRouters = () => {

    const { isAuthenticated, user, setGlobalLoading } = useAuthContext();
    const { setDrawerOptions } = useDrawerContext();
    const location = useLocation();
    const Nav = useNavigate();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'dashboard',
                path: '/dashboard',
                label: 'Página Inicial'
            },
            {
                icon: 'receipt_long',
                path: '/relatorios',
                label: 'Relatórios'
            },
        ]);
    }, [setDrawerOptions]);

    
    const routesWithoutMenu = ["/obras"];

    return (
        <>
            {!isAuthenticated && (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            )}

            {isAuthenticated && (
                <MenuLateral hideMenu={routesWithoutMenu.includes(location.pathname)}>
                    <Routes>
                        <Route path="/obras/dashboard/:id" element={<Dashboard />} />

                        <Route path="/pessoas" element={<ListagemDePessoas />} />
                        <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas />} />

                        <Route path="/cidades" element={<ListagemDeCidades />} />
                        <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />

                        <Route path="/obras" element={<ListagemDeObras />} />
                        <Route path="/obras/dashboard" element={<Navigate to="/obras" />} />
                        <Route path="*" element={<Navigate to="/obras" />} />
                    </Routes>
                </MenuLateral>
            )}
        </>
    );
};
