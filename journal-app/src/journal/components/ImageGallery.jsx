import * as React from 'react';
import {ImageListItem, ImageList} from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ImageGallery = ({images = [] }) => {
  return (
    <ImageList
      sx={{ width: '100%', height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={170}
      
    >
      {images.map((image) => (
        <ImageListItem key={image} >
          <img
          src={`${image}?w=164&h=164fit=crop&auto=format`}
          srcSet={`${image}?w=164&h=164fit=crop&auto=format&dpr=2 2x`}
            // {...srcset(item.img, 121, item.rows, item.cols)}
            alt='Imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
