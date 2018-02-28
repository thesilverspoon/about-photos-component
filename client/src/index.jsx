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
      phone: props.data.about.phone,
      price: props.data.about.price,
      style: props.data.about.style,
      banner: props.data.banner,
      photo: props.data.photo,
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    ajax.get((err, data) => {
      if (err) {
        throw err;
      } else {
        this.setState({
          restaurant: data.restaurant,
        })
      }
    });
  }

  render() {
    return (
      <div>
        <About />
      </div>
    );
  }
}

render(<App data={sampleData[0]}/>, document.getElementById('app'));

export default App;
