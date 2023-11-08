import React, { useEffect } from 'react';
import styles from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import useToggle from 'hooks/useToggle';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ data }) {
  const { isOpen, open, close } = useToggle();

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [close]);

  return (
    <div className={styles.imageContainer}>
      <img
        src={data.webformatURL}
        alt={data.tags}
        width={400}
        height={300}
        className={styles.image}
        onClick={open}
      />
      {isOpen ? <Modal data={data} closeModal={close} /> : null}
    </div>
  );
}

ImageGalleryItem.propTypes = {
  data: PropTypes.object.isRequired,
};
