import React from 'react';
import profile from '../assets/profile.jpg';

function About() {
  return (
    <>
      <div className="container-sm mt-5 mb-5 d-flex justify-content-center">
        <article className="col-10 d-flex align-items-center">
          <div className="container-sm d-flex justify-content-around align-items-center">
            <figure className="m-5">
              <img
                src={profile}
                alt="profile"
                width="200px"
                height="200px"
                style={{ borderRadius: '50%' }}
              />
            </figure>
            <div className="container-sm">
              <h1 className="mb-5">about me</h1>
              <p style={{ color: 'white' }}>
                I'm just a guy who loves horror films. Also, I've been learning
                ReactJS and Bootstrap, so there's that.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default About;
