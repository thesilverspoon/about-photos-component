import React from 'react';

const SideBar = ({ price, hours, style, phone }) => {
  return (
    <div>
      <div className="price">{price}</div>
      <div className="hours">{hours}</div>
      <div className="style">{style}</div>
      <div className="phone">{phone}</div>
    </div>
  );
};

export default SideBar;
