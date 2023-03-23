import {useState, useEffect} from 'react';
import {Typography, Container, TextField, Box} from '@mui/material';
import {getCart} from '../models/CartModel';
import CartList from '../components/CartList';

function Cart() {
  const [cart, setCart] = useState({});
  const [userId, setUserId] = useState(null);

  const onUserIdEntered = (event) => {
    const enteredId = event.target.value;
    if (isNaN(enteredId)) {
      setUserId(null);
    } else {
      setUserId(enteredId);
    }
  };

  useEffect(() => {
    if (userId) {
      getCart(userId).then((cart) => setCart(cart));
    }
  }, [userId]);

  return (
    <Container sx={{paddingBottom: '2rem'}}>
      <Typography variant="h3">Kundvagn</Typography>
      <TextField
        size="small"
        id="outlined-basic"
        label="Användar-ID"
        variant="outlined"
        onChange={onUserIdEntered}
        sx={{marginTop: '6px', width: '120px', marginBottom: '1rem'}}
        margin="dense"
      />
      {cart && cart.products && <CartList products={cart.products}></CartList>}
      {cart && cart.cartTotal && (
        <Box sx={{border: '1px solid black', marginBotttom: '2rem', maxWidth: '80%', margin: '0 auto'}}>
          <Typography variant="subtitle1">{`Totalsumma: ${cart.cartTotal} kr`}</Typography>
        </Box>
      )}
    </Container>
  );
}

export default Cart;
