import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductList() {
  // State to store products fetched from API
  const [products, setProducts] = useState([]);

  // Fetch products from API when component mounts
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        const data = response.data;
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error.response.data.message);
      });
  }, []);
  //  console.log(products);
  // Render loading message if products are not fetched yet
  if (products.length === 0) {
    return (
      <Typography variant="h5" style={{ margin: '24%' }}>
        Loading...
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} style={{ margin: '8% 0% 4% 5%', width: '90%' }}>

      {products.map(product => (
        <Grid
          item
          xs={4}
          key={product.id}>
          {/* Card component to display product */}
          <Card
            sx={{
              width: '100%',
              cursor: 'pointer'
            }}>
            {/* Link to product details page */}
            <Link
              to={`/proDetails/${product.id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>

              <CardMedia
                component="img"
                height="350"
                image={product.images[0]}
                alt={product.title}
              />
            </Link>
            {/* Card content section */}
            <CardContent>
              {/* Link to product details page */}
              <Link
                to={`/proDetails/${product.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}>
                {/* Product details */}
                <Typography
                  variant="h6"
                  gutterBottom>
                  {product.title}
                </Typography>
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary">
                ₹{product.price}
                <Button
                  type='submit'
                  variant="contained"
                  color="success"
                  onClick={() => { alert("Added to cart") }}
                  endIcon={<AddShoppingCartIcon />}
                  style={{ marginLeft: '45%' }}
                >
                  ADD TO CART
                </Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

    </Grid>
  );
}
