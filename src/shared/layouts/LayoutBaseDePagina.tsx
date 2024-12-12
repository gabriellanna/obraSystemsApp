import { Avatar, Box, Button, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ReactNode } from "react";

import { useDrawerContext } from "../contexts";
import FlexBox from "../components/divs/flexBox";

interface ILayoutBaseDePaginaProps {
    children: ReactNode;
    titulo: string;
    barraDeFerramentas?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();

    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height={'100%'} display={'flex'} flexDirection={'column'} gap={1} >

            <FlexBox padding={1} aiCenter gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}

                <FlexBox column marginTop={3} marginLeft={5} gap={25} fullWidth>
                    <Button
                        size="small"
                        variant="contained"
                        sx={{ width: 100 }}
                        startIcon={<Icon>keyboard_backspace</Icon>}
                        component={RouterLink}
                        to="/obras"
                    >
                        Obras
                    </Button>

                    <Typography
                        variant={smDown ? 'h5' : mdDown ? 'h4' : 'h4'}
                        overflow={'hidden'}
                        whiteSpace={'nowrap'}
                        textOverflow={'ellipsis'}
                        fontWeight={500}
                    >
                        {titulo}
                    </Typography>
                </FlexBox>

                <FlexBox height="100%" marginRight={5} jcCenter aiCenter>
                    <Avatar>GG</Avatar>
                </FlexBox>

            </FlexBox>

            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}

            <Box flex={1} overflow={'auto'} // ocupar todo o espaço disponível => flex={1}
            >
                {children}
            </Box>

        </Box>
    );
};