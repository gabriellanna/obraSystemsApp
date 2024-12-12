import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import FlexBox from '../../../shared/components/divs/flexBox';



interface ICardObraProps {
  title: string;
  src: string;
  descricao: string;
  onClick: () => void;
};

export const CardObra: React.FC<ICardObraProps> = (props) => {
  const { title, src, descricao, onClick } = props;

  return (
    <FlexBox onClick={onClick}>
      <Card
        sx={{
          width: 300,
          maxWidth: 345,
          cursor: 'pointer',
          transition: 'all 0.15s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '1px 3px 5px 1px #e3e3e3',
          },
          '&:active': {
            transform: 'scale(0.9)',
            transition: 'all 0.05s ease-in-out',
            boxShadow: '1px 0px 10px 1px #f1f1f1',
          },
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={src}
          title="green iguana"
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {descricao}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </FlexBox>
  );
};