import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container} from '@mui/system';
import ProductBig from '../components/ProductBig';
import {getOne} from '../models/ProductModel';

function ProductDetail() {
  const params = useParams();
  const productId = 1;
 /*  const productId = params.id; */

  const [product, setProduct] = useState({});

  useEffect(() => {
    getOne(productId).then((product) => setProduct(product));
  }, [productId]);

  return (
    <>
      <Container maxWidth="md">
        <ProductBig product={product} />
      </Container>
    </>
  );
}

export default ProductDetail;
