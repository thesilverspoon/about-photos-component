import React from 'react';

const Banner = ({ banner }) => {
  return (
    <div className="bannerImg">
      <img src={banner} />
    </div>
  );
};

export default Banner;
