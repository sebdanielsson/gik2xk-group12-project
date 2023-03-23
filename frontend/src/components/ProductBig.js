import React from 'react';
import {Grid, Box, Button, Typography, Fab} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {addToCart} from '../models/ProductModel';
import Image from 'mui-image';
import AmountInput from './AmountInput';
import UserIdInput from './UserIdInput';
import RatingItem from './RatingItem';
import RatingItemList from './RatingItemList';

function ProductBig(props) {
  const {product} = props;
  const [ratings, setRatings] = React.useState(product.hasOwnProperty('id') ? product.ratings : []);
  if (product.hasOwnProperty('id') && ratings.length === 0 && product.ratings.length > 0) {
    setRatings(product.ratings);
  }
  console.log(ratings);
  return props.product.hasOwnProperty('id') ? (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Image
          src={
            product.imageUrl ||
            'https://image.spreadshirtmedia.net/image-server/v1/compositions/T812A2PA5886PT17X48Y77D155266323W24996H9381/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/meh-ascii-art-internet-emoticon-emoji-mens-premium-t-shirt.jpg'
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{textAlign: 'left'}}>
        <Typography variant="h5" component="h3">
          {product.title}
        </Typography>
        <RatingItem product={product} />
        <Typography variant="body1" component="p">
          {product.description}
        </Typography>
        <Typography variant="h6" component="h4">
          {product.price} kr
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'left'}}>
          <UserIdInput />
          <AmountInput />
          <Button variant="text" onClick={() => addToCart(product.id, 3, 1)}>
            Add to cart
          </Button>
        </Box>
      </Grid>
      <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={3}>
        {ratings.map((rating) => (
          <Grid item key={rating.id}>
            <RatingItemList rating={rating} />
          </Grid>
        ))}
      </Grid>
      <Fab
        href={`/products/${product.id}/edit`}
        size="large"
        color="primary"
        aria-label="edit"
        style={{position: 'fixed', bottom: '50px', right: '50px'}}>
        <EditIcon />
      </Fab>
    </Grid>
  ) : (
    <Typography>Product saknas</Typography>
  );
}

export default ProductBig;
