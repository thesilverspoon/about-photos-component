import React from 'react';
import { render } from 'react-dom';
import ajax from './ajax.js';
import sampleData from '../../data/sampleData.js';
import PropTypes from 'prop-types';
import About from './About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.data.id,
      name: props.data.name,
      description: props.data.about.description,
      hours: props.data.about.hours,
      style: props.data.about.style,
      price: props.data.about.price,
      phone: props.data.about.phone,
      banner: props.data.banner,
      photo: props.data.photo,
    }
  }

  render() {
    return (
      <div>
        <About description={this.state.description} name={this.state.name} />
      </div>
    );
  }
}

render(<App data={sampleData[0]} />, document.getElementById('app'));

export default App;
