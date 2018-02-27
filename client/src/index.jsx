import React from 'react';
import { render } from 'react-dom';
import ajax from './ajax.js';
import sampleData from '../../data/sampleData.js';
import PropTypes from 'prop-types';
import About from './About.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.data.name,
      description: props.data.about.description,
      phone: props.data.about.phone,
      price: props.data.about.price,
      style: props.data.about.style,
      hours: props.data.about.hours,
      banner: props.data.banner,
      photo: props.data.photo,
    };
  }

  render() {
    return (
      <div>
        <About restaurant={this.state.name} description={this.state.description}/>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired,
};

render(<App data={sampleData[0]} />, document.getElementById('app'));
