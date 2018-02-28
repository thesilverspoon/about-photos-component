import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  return (
    <div>
      <div className="restaurant">
        About {props.data}
      </div>
      <div className="description">
        {props.description}
      </div>
    </div>
  );
};

export default About;
