import { Typography, Icon, useTheme } from '@mui/material'
import FlexBox from '../../../shared/components/divs/flexBox'
import CardFlex from '../../../shared/components/divs/flexCard';

interface IDashCardProps {
  value: number;
  title: string;
  icon: string;
}

export const DashCard: React.FC<IDashCardProps> = (props) => {
  const { value, title, icon} = props;

  const theme = useTheme();
  const corFraca = theme.palette.action.active; 
  const corForte = theme.palette.primary.dark; 


  return (
    <CardFlex width="100%" height="100px">

      <FlexBox column height="100%" width="50%" jcCenter gap={0}>
        <Typography fontSize={30} fontWeight={500} color={corForte}>
          {value}
        </Typography>
        <Typography fontSize={20} color={corFraca}>
          {title}
        </Typography>
      </FlexBox>

      <FlexBox width="50%" height="100%" aiCenter jcCenter>
        <Icon sx={{fontSize: 60}} color={"action"}>{icon}</Icon>
      </FlexBox>

    </CardFlex>
  );
};
