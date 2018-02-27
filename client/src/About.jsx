import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  return (
    <div>
      <div className="restaurant">
        About {props.restaurant}
      </div>
      <div className="description">
        {props.description}
      </div>
    </div>
  );
};

About.propTypes = {
  restaurant: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
