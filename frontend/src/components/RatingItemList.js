import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Grid } from '@mui/material';

function RatingItemList(rating) {
 
  return (

        <Box item xs key={rating.id}>
      sx={{
        '& > legend': {mt: 2},
      }}
      
      <Rating
        name="half-rating-read"
        value={rating.rating}
        precision={0.5}
        size="small"
        readOnly
        style={{display: 'flex', alignItems: 'center'}}
      />
    </Box>
    

         
  /*   <Box
      sx={{
        '& > legend': {mt: 2},
      }}>
      <Rating
        name="half-rating-read"
        value={productRating}
        precision={0.5}
        size="small"
        readOnly
        style={{display: 'flex', alignItems: 'center'}}
      />
    </Box> */
  );
    }



export default RatingItemList;
