import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import RatingItem from './RatingItem';
import BasicButton from './BasicButton';

function ProductCard(props) {
  const {product} = props;
  return (
    <Card sx={{maxWidth: 345}}>
      <RatingItem />
      <CardActionArea>
        <CardMedia component="img" height="140" image={product.imageUrl} alt={product.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
          <BasicButton></BasicButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
