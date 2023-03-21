import {Box} from '@mui/material';
import ProductCard from './ProductCard';
import {getAll} from '../models/ProductModel';
import {useEffect, useState} from 'react';


function ProductList({pathname}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  return (
    <Box>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Box>
  );
}

export default ProductList;
