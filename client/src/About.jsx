import React from 'react';
import PropTypes from 'prop-types';

const About = ({ description, name, photo }) => {
  return (
    <div>
      <div className="restaurant">
        About {name}
      </div>
      <div className="description">
        description {description}
      </div>
      <div className="photo">
        Photos:
        <img src={photo[0]} />
        <img src={photo[1]} />
        <img src={photo[2]} />
      </div>
    </div>
  );
};

export default About;
