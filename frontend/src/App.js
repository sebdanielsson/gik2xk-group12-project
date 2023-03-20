import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Container} from '@mui/system';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import ProductEdit from './views/ProductEdit';
import ProductAdd from './views/ProductAdd';
import Cart from './views/Cart';
import AppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar position="fixed" />

      <Container sx={{marginTop: '6rem'}}>
        <Routes>
          <Route exact path="/" element={<Products></Products>}></Route>
          <Route exact path="/products" element={<Products></Products>}></Route>
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
