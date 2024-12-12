import React, { ReactNode } from 'react';
import { Divider, Typography, useTheme } from '@mui/material';
import FlexBox from '../divs/flexBox';
import CardFlex from '../divs/flexCard';

interface ISectionTitleProps {
  title: string;
  children: ReactNode;
}

export const SectionTitle: React.FC<ISectionTitleProps> = (props) => {
  const { title, children } = props;

  const theme = useTheme();
  const corForte = theme.palette.primary.dark;

  return (
    <CardFlex width="100%" column gap={20}>

      <FlexBox column fullWidth gap={10}>
        <Typography color={corForte} fontSize={20} fontWeight={500}>
          {title}
        </Typography>

        <Divider />

      </FlexBox>

      <FlexBox>
        {children}
      </FlexBox>

    </CardFlex>
  )
}
