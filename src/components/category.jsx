import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Category() {

    // State to store categories
    const [categories, setCategories] = useState([]);

    // Fetch categories data from API on component mount
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
            .then(response => {
                const data = response.data;
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error.response.data.message);
            });
    }, []);
    // console.log(categories);

    // Display loading message if categories data is not fetched yet
    if (categories.length === 0) {
        return (
            <Typography variant="h5" style={{ margin: '24%' }}>
                Loading...
            </Typography>
        );
    }

    return (
        <>
            {/* Grid container to display categories */}
            <Grid
                container
                spacing={2}
                style={{ marginTop: '10%' }}>

                {/* Map through categories and display each category */}
                {categories.map(category => (
                    <Grid
                        item
                        xs={4}
                        key={category.id}>
                        {/* Link to category products page */}
                        <Link
                            to={`/categories/${category.id}`}
                            style={{ textDecoration: 'none', color: "black" }}>
                            <Box
                                key={category.id}
                                style={{ marginLeft: "46px", width: '20rem', marginTop: "2%", cursor: "pointer" }}>
                                {/* Details of the category */}
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    style={{ width: "100%", borderRadius: "10px" }} />
                                <Typography
                                    variant="h6"
                                    style={{ marginTop: '0.5rem' }}>
                                    {category.name}
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}

            </Grid>
        </>
    );
}
