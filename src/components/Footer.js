import React from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <div className="container-sm footer-container">
        <footer className="footer footer-expand-lg fixed-bottom navbar-custom">
          <div className="d-flex justify-content-center pt-2 pb-3">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p style={{ color: 'white' }}>
                  carlos augusto silva {new Date().getFullYear()}
                </p>
              </li>
              <div className="d-flex justify-content-between">
                <li className="nav-item">
                  <a
                    href="https://github.com/NINentity7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://carlosaugusto.webflow.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faEye} size="2x" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/in/carlos-augusto-silva-800b14189/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
