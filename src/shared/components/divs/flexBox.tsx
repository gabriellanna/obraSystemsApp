import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

export interface IFlexBox extends BoxProps {

  row?: boolean;
  jcEnd?: boolean;
  aiEnd?: boolean;
  column?: boolean;
  jcStart?: boolean;
  aiStart?: boolean;
  jcEvenly?: boolean;
  jcAround?: boolean;
  jcCenter?: boolean;
  aiCenter?: boolean;

  aiBetween?: boolean;
  aiAround?: boolean;
  aiEvenly?: boolean;

  jcBetween?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;

  sx?: React.CSSProperties;
  sx1?: React.CSSProperties;

  gap?: number | string;
}

const FlexBox: React.FC<IFlexBox> =
  ({
    fullWidth,
    gap,
    sx,
    sx1,
    row,
    aiEnd,
    jcEnd,
    column,
    jcStart,
    aiStart,
    aiCenter,
    jcCenter,
    jcBetween,
    jcEvenly,
    jcAround,
    
    aiBetween,
    aiAround,
    aiEvenly,

    children,
    ...boxProps
  }) => {

    var style: React.CSSProperties = {
      display: 'flex',

      ...(fullWidth && { width: '100%' }),
      ...(!!gap && { gap: gap }),

      ...(row && { flexDirection: 'row' }),
      ...(column && { flexDirection: 'column' }),

      ...(aiEnd && { alignItems: 'end' }),
      ...(aiStart && { alignItems: 'start' }),
      ...(jcEnd && { justifyContent: 'end' }),
      ...(aiCenter && { alignItems: 'center' }),
      ...(jcStart && { justifyContent: 'start' }),
      ...(jcCenter && { justifyContent: 'center' }),

      ...(jcBetween && { justifyContent: 'space-between' }),
      ...(jcAround && { justifyContent: 'space-around' }),
      ...(jcEvenly && { justifyContent: 'space-evenly' }),
      
      ...(aiBetween && { alignItems: 'space-between' }),
      ...(aiAround && { alignItems: 'space-around' }),
      ...(aiEvenly && { alignItems: 'space-evenly' }),

      ...(sx),
      ...(sx1)
    };

    return (
      <Box style={style} {...boxProps}>
        {children}
      </Box>
    )
  }

export default FlexBox;