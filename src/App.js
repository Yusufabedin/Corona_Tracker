import React from 'react';
// short way by commponets imports.
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// import fetchData from api commponent.
import { fetchData } from './api';

import coronaImage from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };
  // componentDidMount
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  // handelCountryChange
  handelCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='COVID-19' />
        <Cards data={data} />
        <CountryPicker handelCountryChange={this.handelCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
