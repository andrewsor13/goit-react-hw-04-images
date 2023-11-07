import React, { useEffect, useState, useCallback } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import '../index.css';
import { resourceApi } from 'api/api';
import Button from './Button/Button';
import styles from './App.module.css';
import Loader from './Loader/Loader';

export const App = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState();
  const [counter, setCounter] = useState(12);
  const [loader, setLoader] = useState(false);

  const showLoader = () => {
    setLoader(true);
  };

  const hideLoader = () => {
    setLoader(false);
  };

  const handleSearch = async value => {
    await setCounter(12);
    showLoader();
    const responseData = await resourceApi(value, 12);
    setData(responseData);
    setValue(value);
    hideLoader();
  };

  const fetchData = useCallback(
    async value => {
      showLoader();
      const responseData = await resourceApi(value, counter);
      setData(responseData);
      hideLoader();
    },
    [counter]
  );

  useEffect(() => {
    if (counter !== 12) {
      fetchData(value);
    }
  }, [counter, fetchData, value]);

  const handleClick = () => {
    setCounter(prevCount => prevCount + 12);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <ImageGallery searchValue={data.hits} />
      {loader ? <Loader /> : null}

      {counter < data.totalHits ? (
        <div className={styles.button}>
          <Button
            content={'Load More'}
            type={null}
            icon={null}
            styleData={{
              border: 'none',
              backgroundColor: 'cyan',
              padding: 10,
              fontSize: 25,
              borderRadius: 10,
              cursor: 'pointer',
            }}
            onClick={handleClick}
          ></Button>
        </div>
      ) : null}
    </div>
  );
};
