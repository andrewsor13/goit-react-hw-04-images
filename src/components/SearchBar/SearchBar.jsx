import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import Button from 'components/Button/Button';
import { SlMagnifier } from 'react-icons/sl';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(inputValue);
    setInputValue('');
  };
  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.button}>
          <Button
            styleData={{
              border: 'none',
              backgroundColor: 'transparent',
              padding: 0,
            }}
            icon={<SlMagnifier size={20} className={styles.icon} />}
            type={'submit'}
            content={null}
            onClick={null}
          />
        </div>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={inputValue}
        ></input>
      </form>
    </header>
  );
}
