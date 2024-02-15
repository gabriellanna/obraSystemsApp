import { ReactNode, useCallback, useContext, useState, createContext } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};
