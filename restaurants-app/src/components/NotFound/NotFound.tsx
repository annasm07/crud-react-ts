import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = function () {
  return (
    <>
      <span className="error-msg">404 Page Not Found</span>
      <Link to="/" >
        <button className="button">
            Home
        </button>
      </Link>
    </>
  );
};

export default Notfound;
