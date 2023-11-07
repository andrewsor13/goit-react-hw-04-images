import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.module.css';

export default function ImageGallery({ searchValue }) {
  return (
    <ul>
      {searchValue?.map((item, index) => (
        <li key={index}>
          <ImageGalleryItem data={item} />
        </li>
      ))}
    </ul>
  );
}
