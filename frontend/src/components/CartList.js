import {Box} from '@mui/material';
import CartItem from './CartItem';

function CartList({products}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        paddingBottom: '2rem',
      }}>
      {products && products.map((product, index) => <CartItem key={index} product={product} />)}
    </Box>
  );
}

export default CartList;
