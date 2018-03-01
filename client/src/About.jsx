import React from 'react';
import PropTypes from 'prop-types';

const About = ({ description, name }) => {
  return (
    <div>
      <div className="restaurant">
        About {name}
      </div>
      <div className="description">
      description {description}
      </div>
    </div>
  );
};

export default About;
