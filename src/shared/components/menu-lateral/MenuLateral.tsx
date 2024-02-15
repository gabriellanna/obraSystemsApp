/* eslint-disable */

import { Box, Button, Divider, Drawer, Icon, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import AvatarNoImg from "../avatar/AvatarNoImg";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { useDrawerContext } from "../../contexts";

interface IAppThemeProviderProps {
  children: ReactNode
}

const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { toggleTheme } = useAppThemeContext();

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
  
  return (
    <>
      <Drawer open={isDrawerOpen} onClose={toggleDrawerOpen} variant={smDown ? 'temporary' : 'permanent'}>
        <Box width={theme.spacing(28)} height="100%" display='flex' flexDirection='column'>

          <Box height={theme.spacing(20)} width={theme.spacing(20)} display='flex' alignItems='center' justifyContent={'center'}>
            <AvatarNoImg>
              Gabriel Lanna
            </AvatarNoImg>
          </Box>

          <Divider />
          
          <Box width={'100%'}>
            <Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>
          </Box>
          
          <Divider />

          <Box flex={1} //flex={1} serve para fazer com que o container ocupe todo o espaço disponível
          > 
            <ListItemButton>
              <ListItemIcon>
                <Icon>
                  home
                </Icon>
              </ListItemIcon>
              <ListItemText>
                Página Inicial
              </ListItemText>
            </ListItemButton>
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