import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Typography, Box, AppBar, Toolbar} from '@mui/material';
import {Container} from '@mui/system';
import Home from './views/Home';
import ProductDetail from './views/ProductDetail';
import ProductEdit from './views/ProductEdit';
import ProductAdd from './views/ProductAdd';
import Cart from './views/Cart';

function App() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
            <Typography variant="h1">
              <Link to="/">Hem</Link>
            </Typography>
          </Box>
          <Link to="/cart">
            <img src="/logo.png" alt="cart" width="50" height="50" />
          </Link>
        </Toolbar>
      </AppBar>

      <Container sx={{marginTop: '6rem'}}>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/products/:id" element={<ProductDetail></ProductDetail>}></Route>
          <Route exact path="/posts/:id/edit" element={<ProductEdit></ProductEdit>}></Route>
          <Route exact path="/product/new" element={<ProductAdd></ProductAdd>}></Route>
          <Route exact path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
