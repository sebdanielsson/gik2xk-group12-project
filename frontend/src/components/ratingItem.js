import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function RatingItem(props) {
  const [value, setValue] = React.useState(4);
  console.log("Test"+props)
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography></Typography>
      <Rating name="read-only" value={value} readOnly />

    </Box>
  );
}
export default RatingItem;