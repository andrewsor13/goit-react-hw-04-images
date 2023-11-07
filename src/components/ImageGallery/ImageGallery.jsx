import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ searchValue }) {
  return (
    <ul className={styles.container}>
      {searchValue?.map((item, index) => (
        <li key={index}>
          <ImageGalleryItem data={item} />
        </li>
      ))}
    </ul>
  );
}
