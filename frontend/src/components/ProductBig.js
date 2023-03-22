import React from 'react';
import {Typography} from '@mui/material';
import {Grid} from '@mui/material';
import Image from 'mui-image';

function ProductBig({product}) {
  return product ? (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Image src={product.imageUrl} />
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
      </Grid>
    </Grid>
  ) : (
    <Typography>Product saknas</Typography>
  );
}

export default ProductBig;
