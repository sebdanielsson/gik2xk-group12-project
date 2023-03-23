import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import RatingItem from './RatingItem';
import {CardActions} from '@mui/material';
import {Link} from 'react-router-dom';

function ProductCard(props) {
  const {product} = props;
  return (
    <Card sx={{minWidth: 240, maxWidth: 300}}>
      <Link to={`/products/${product.id}`} style={{textDecoration: 'inherit', color: 'inherit'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              product.imageUrl ||
              'https://image.spreadshirtmedia.net/image-server/v1/compositions/T812A2PA5886PT17X48Y77D155266323W24996H9381/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/meh-ascii-art-internet-emoticon-emoji-mens-premium-t-shirt.jpg'
            }
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{marginBottom: 10}}>
              {product.description}
            </Typography>

            <Typography variant="body1">{product.price} kr</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions style={{justifyContent: 'flex'}}>
        <RatingItem product={product} />
      </CardActions>
    </Card>
  );
}

<CardContent sx={{alignSelf: 'flex-end', textAlign: 'right'}}></CardContent>;
export default ProductCard;
