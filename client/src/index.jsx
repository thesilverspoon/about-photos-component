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
      restaurant: "",
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
      hi
        <About data={sampleData[0]} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

export default App;
