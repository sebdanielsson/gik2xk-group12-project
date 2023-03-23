import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function RatingItem(props) {
  var averageRating;
  if (props.product.hasOwnProperty("id")) {
    var totalRating = 0;
    var ratingArray = props.product.ratings;
    ratingArray.forEach((rating) => {
      totalRating += rating.rating;
    });
    //validering av raderna om =0 vänstersida annars höger
    averageRating = ratingArray.length === 0 ? 0 : (totalRating / ratingArray.length);
  } else {
    averageRating = 0;
  }

  return (
    <Box
      sx={{
        '& > legend': {mt: 2},
      }}>
      <Typography></Typography>
      <Typography>
        <Rating name="read-only" value={averageRating} size="small" readOnly></Rating>({averageRating})
      </Typography>
    </Box>
  );
}
export default RatingItem;
