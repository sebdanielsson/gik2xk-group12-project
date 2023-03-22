import {Box} from '@mui/material';
import ProductCard from './ProductCard';
import {getAll} from '../models/ProductModel';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function ProductList({pathname}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  return (
    <Box>
      {products.map((product) => {
        return (
          <Link to={`/products/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        );
      })}
    </Box>
  );
}

export default ProductList;
