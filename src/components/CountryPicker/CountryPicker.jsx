import React, { useState, useEffect } from 'react';
// this import by material NativeSelect or fromControl to uses
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
//import fetchCountris from api commponents
import { fetchCountries } from '../../api';

const Countries = ({ handelCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handelCountryChange(e.target.value)}
      >
        <option value=''>Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
