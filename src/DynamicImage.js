import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';

const DynamicImage = ({ imagename }) => {
  const imagesrc = `${process.env.PUBLIC_URL}/image/${imagename}`;
  
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="auto"
          image={imagesrc}
          alt={imagename}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {imagename}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default DynamicImage;
