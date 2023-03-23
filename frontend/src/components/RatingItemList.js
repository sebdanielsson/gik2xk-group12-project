import * as React from 'react';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';

function RatingItemList(props) {
  var currentRating = props.rating
  return ( 
    
    <Box> {currentRating.id}
      <Rating
        name="half-rating-read"
        value={currentRating.rating}
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
