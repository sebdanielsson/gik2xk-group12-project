import React from 'react';
import {Typography} from '@mui/material';
import {Grid, Box, Button} from '@mui/material';
import {addToCart} from '../models/ProductModel';
import Image from 'mui-image';
import AmountInput from './AmountInput';

function ProductBig({product}) {
  return product ? (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Image
          src={
            product.imageUrl ||
            'https://image.spreadshirtmedia.net/image-server/v1/compositions/T812A2PA5886PT17X48Y77D155266323W24996H9381/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/meh-ascii-art-internet-emoticon-emoji-mens-premium-t-shirt.jpg'
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" component="h3">
          {product.name}
        </Typography>
        <Typography variant="h6" component="h4">
          {product.price}
        </Typography>
        <Typography variant="body1" component="p">
          {product.description}
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'left'}}>
          <AmountInput />
          <Button variant="text" onClick={() => addToCart(product.id, 3, 1)}>
            Add to cart
          </Button>
        </Box>
      </Grid>
    </Grid>
  ) : (
    <Typography>Product saknas</Typography>
  );
}

export default ProductBig;
