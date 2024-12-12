import { Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import FlexBox from '../components/divs/flexBox';



interface ILayoutObrasProps {
  titulo: string;
  children: ReactNode;
  barraDeFerramentas?: ReactNode;
};

export const LayoutObras: React.FC<ILayoutObrasProps> = (props) => {
  const { titulo, children, barraDeFerramentas } = props;

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <FlexBox
      column aiCenter
      paddingY={5}
      paddingX={15}
      gap={30}
      width={'100%'}

    //  bgcolor={'#14581d3d'}
    >

      <FlexBox
        column
        gap={15}
        fullWidth
        maxWidth='1900px'
       // bgcolor={'#7bbd7e94'}
      >

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h4'}
          overflow={'hidden'}
          whiteSpace={'nowrap'}
          textOverflow={'ellipsis'}
          fontWeight={500}
        >
          {titulo}
        </Typography>


        {barraDeFerramentas && (
          <FlexBox fullWidth // bgcolor={'#3333338e'}
          >
            {barraDeFerramentas}
          </FlexBox>
        )}

      </FlexBox>


      <FlexBox
        fullWidth
        // paddingX={10}
        maxWidth='1900px'
        // bgcolor={'#3e33'}
      >
        {children}
      </FlexBox>

    </FlexBox>
  )
}
