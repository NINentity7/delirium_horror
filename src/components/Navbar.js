import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ counter, setCounter }) {
  const handleClick = () => {
    setCounter(1);
    return counter;
  };

  return (
    <>
      <div className="container-sm">
        <nav className="navbar navbar-custom justify-content-around pt-3 mb-3 fixed-top">
          <div>
            <Link
              onClick={() => handleClick()}
              to={`/${''}`}
              className="nav-item"
            >
              <h1>delirium</h1>
            </Link>
          </div>
          <div>
            <Link to="/about" className="nav-item">
              <h5>about</h5>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
