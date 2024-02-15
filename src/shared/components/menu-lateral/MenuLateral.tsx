/* eslint-disable */

import { Box, Button, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import AvatarNoImg from "../avatar/AvatarNoImg";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IAppThemeProviderProps {
  children: ReactNode
}
interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: () => void | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  }

  
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>
          {icon}
        </Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  
  return (
    <>
      <Drawer open={isDrawerOpen} onClose={toggleDrawerOpen} variant={smDown ? 'temporary' : 'permanent'}>
        <Box width={theme.spacing(28)} height="100%" display='flex' flexDirection='column'>

          <Box height={theme.spacing(20)} width="100%" display='flex' alignItems='center' justifyContent={'center'}>
            <AvatarNoImg>
              Gabriel Lanna
            </AvatarNoImg>
          </Box>
          
          <Divider />

          <Box flex={1} //flex={1} serve para fazer com que o container ocupe todo o espaço disponível
          > 
            <List component='nav'>
              {drawerOptions.map((drawerOption) => (
                <ListItemLink 
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={toggleDrawerOpen}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}

export default MenuLateral;