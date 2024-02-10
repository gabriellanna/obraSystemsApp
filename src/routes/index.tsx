import { Button } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export const AppRouters = () => {

    const { toggleTheme } = useAppThemeContext();

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>} />
            <Route path="*" element={<p>Pagina iniciaaaal</p>} />
        </Routes>
    );
};