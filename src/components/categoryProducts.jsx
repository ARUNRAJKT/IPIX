import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CategoryProducts() {
    // Extract categoryId from URL params
    const { categoryId } = useParams();
    // State to hold products data
    const [products, setProducts] = useState([]);

    // Fetch products data when categoryId changes
    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`)
            .then(response => {
                const data = response.data;
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error.response.data.message);
            });
    }, [categoryId]);
    // console.log(products);

    return (
        <Grid
            container
            spacing={2}
            style={{ margin: '8% 0% 4% 5%', width: '90%' }}>

            {/* Map through products and render each product */}
            {products.map(product => (
                <Grid
                    item
                    xs={4}
                    key={product.id}>
                    {/* Card for each product */}
                    <Card sx={{ width: '100%', cursor: 'pointer' }}>
                        {/* Link to product details page */}
                        <Link
                            to={`/proDetails/${product.id}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            {/* Product image */}
                            <CardMedia
                                component="img"
                                height="350"
                                image={product.images[0]}
                                alt={product.title}
                            />
                        </Link>
                        <CardContent>
                            {/* Link to product details page */}
                            <Link
                                to={`/proDetails/${product.id}`}
                                style={{ textDecoration: 'none', color: 'inherit' }}>
                                {/* Product title */}
                                <Typography
                                    variant="h6"
                                    gutterBottom>
                                    {product.title}
                                </Typography>
                            </Link>
                            {/* Product price and Add to Cart button */}
                            <Typography
                                variant="subtitle1"
                                color="text.secondary">
                                ₹{product.price}
                                <Button
                                type='submit'
                                onClick={()=>{alert("Added to cart")}}
                                    variant="contained"
                                    color="success"
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

