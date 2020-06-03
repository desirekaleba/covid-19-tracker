import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Typography } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };

        fetchCountriesAPI();

    }, [setFetchedCountries]);

    return (
        <div>
            <Typography variant="h6" color="textSecondary" gutterBottom>Where</Typography>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                    <option value="global">Global</option>
                    {
                        fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)
                    }
                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker;