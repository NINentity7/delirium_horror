import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ counter, setCounter }) {
  const handleClick = (e) => {
    setCounter(parseInt(e.currentTarget.textContent));
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="container-sm pb-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mb-5">
            <li className="page-item">
              <Link to={counter > 2 ? `/${counter - 1}` : `/${''}`}>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    if (counter > 1) {
                      setCounter(counter - 1);
                      window.scrollTo(0, 0);
                    } else {
                      setCounter(1);
                    }
                  }}
                >
                  &laquo;
                </button>
              </Link>
            </li>
            {counter >= 2 ? (
              <>
                <li className="page-item">
                  <Link to={counter >= 3 ? `/${counter - 1}` : `/${''}`}>
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleClick}
                    >
                      {counter - 1}
                    </button>
                  </Link>
                </li>
                <li className="page-item">
                  <button className="btn btn-danger" onClick={handleClick}>
                    {counter}
                  </button>
                </li>
                <li className="page-item">
                  <Link to={`/${counter + 1}`}>
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleClick}
                    >
                      {counter + 1}
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="page-item">
                  <Link to={`/${''}`}>
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleClick}
                    >
                      {counter}
                    </button>
                  </Link>
                </li>
                <li className="page-item">
                  <Link to={`/${counter + 1}`}>
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleClick}
                    >
                      {counter + 1}
                    </button>
                  </Link>
                </li>
              </>
            )}
            <li className="page-item">
              <Link to={`/${counter + 1}`}>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    setCounter(counter + 1);
                    window.scrollTo(0, 0);
                  }}
                >
                  &raquo;
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Pagination;
