import React from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export default function Modal({ data, closeModal }) {
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.frame}>
        <img
          src={data.largeImageURL}
          className={styles.image}
          width="800"
          height="600"
          alt=""
        ></img>
      </div>
    </div>
  );
}

Modal.propTypes = {
  data: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};
