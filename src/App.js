import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import { fetchData } from './api/';

import coronaImage from './images/covid-19-image.png';

class App extends React.Component {

    state = {
        data: {},
        country: ''
    };

    async componentDidMount() {

        const data = await fetchData();
        this.setState({ data: data });
    }

    handleCountryChange = async (country) => {
        if (country === 'global') {
            window.location.reload(false);
        }
        const data = await fetchData(country);
        this.setState({data: data, country: country});
    }

    render() {

        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                
                <h1><span><img className={styles.image} src={coronaImage} alt="Covid-19" /></span> COVID-19 Tracker </h1>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;