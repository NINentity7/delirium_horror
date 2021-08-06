import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/error.mp4';

function Error({ counter }) {
  return (
    <>
      <div className="container-sm">
        <video src={error} autoPlay></video>
        <div className="pt-5 pr-5 pb-5">
          <Link to={`/${""}`}>
            < button className="btn btn-danger">go back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;
