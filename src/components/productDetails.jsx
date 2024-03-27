import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Slider from 'react-slick'; // Importing Slider component
import 'slick-carousel/slick/slick.css'; // Importing slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Importing slick theme CSS

export default function ProductDetails() {
    // Extracting productId from URL params
    const { productId } = useParams();

    // State to store product details
    const [product, setProduct] = useState(null);

    // Fetch product details when component mounts or productId changes
    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`)
            .then(response => {
                const data = response.data;
                setProduct(data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error.response.data.message);
            });
    }, [productId]);
    //    console.log(product);
    // If product is null, display loading message
    if (!product) {
        return (
            <center>
                <Typography variant="h5" style={{ margin: "24%" }}>Loading...</Typography>
            </center>
        );
    }

    return (
        // Card container for product details
        <Card
            sx={{
                maxWidth: 800, margin: 'auto',
                marginTop: '8%', marginBottom: "8%"
            }}>
            {/* Slider component for product images */}
            <div className="imgslider">
                <Slider {...settings}>

                    {/* Mapping over product images and rendering them */}
                    {product.images.map((Url, index) => (
                        <div key={index}>
                            {/* Rendering product image */}
                            <img style={{ margin: "auto", width: " 50%" }}
                                src={Url}
                                alt={product.title}
                            />
                        </div>
                    ))}

                </Slider>
            </div>

            {/* Card content section */}
            <CardContent>
                {/* Product details*/}
                <Typography variant="h4" gutterBottom>{product.title}</Typography>
                <i><b>Price: ₹{product.price} </b>
                    <Button
                    type='submit'
                    onClick={()=>{alert("Added to cart")}}
                        variant="outlined"
                        color="success"
                        endIcon={<AddShoppingCartIcon />}
                        style={{ marginLeft: '30rem' }}
                    >
                        ADD TO CART
                    </Button></i>
                {/* Product description */}
                <p >Description: {product.description}</p>
            </CardContent>
        </Card>
    );
}


// Slider settings for product images
const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
};
