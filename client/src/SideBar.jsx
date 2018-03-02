import React from 'react';

const SideBar = ({ price, hours, style, phone }) => {
  return (
    <div>
      <img src="https://s3-us-west-1.amazonaws.com/imagesfornamson/21.png" className="moneyIcon" />
      <div className="side">Price: 
        <div className="sideInfo">{price}</div>
      </div>
      <div className="side">Hours of Operation:
        <div className="sideInfo">{hours}</div>
      </div>
      <div className="side">Dress code:
        <div className="sideInfo">{style}</div>
      </div>
      <div className="side">Phone Number:
        <img src="https://s3-us-west-1.amazonaws.com/imagesfornamson/telephone_318-61547.jpg" className="phoneIcon" />
        <div className="sideInfo">{phone}</div>
      </div>
    </div>
  );
};

export default SideBar;
