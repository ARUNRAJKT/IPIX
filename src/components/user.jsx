import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export default function User() {
    // State to store users data
    const [users, setUsers] = useState([]);

    // Fetching users data from API on component mount
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/users')
            .then(function (response) {
                const data = response.data;
                setUsers(data);
            })
            .catch(error => {
                console.error('Error fetching details', error.response.data.message);
            });
    }, []);
    // console.log(users);

    // Render loading message if users data is not yet loaded
    if (users.length === 0) {
        return (
            <Typography
                variant="h5"
                style={{ margin: '24%' }}>
                Loading Users...
            </Typography>
        );
    }

    return (
        <Grid
            container
            spacing={2}
            style={{
                margin: '8% 0% 4% 5%',
                width: '90%'
            }}>

            {/* Mapping over users data to render each user */}
            {users.map((user, index) => (
                <Grid
                    item
                    xs={4}
                    key={index}>
                    <Card
                        sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            {/* Display user avatar */}
                            <CardMedia
                                component="img"
                                height="280"
                                image={user.avatar}
                                alt="User Avatar"
                            />
                            {/* Display user name and email */}
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div">
                                    {user.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary">
                                    {user.email}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}

        </Grid>
    );
}

