import React from 'react';

function Header({ storeName }) {
  return (
    <div className="header">
      <h1>{storeName}</h1>
    </div>
  );
}

export default Header;
