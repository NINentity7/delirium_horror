import React from 'react';
import { Link } from 'react-router-dom';
import getUrl from '../api/services';
import { baseUrlPosters } from '../api/poster_path';
import { useFetch } from '../api/useFetch';

function Cards({ counter }) {
  const { movies } = useFetch(`${getUrl()}${counter}`);

  return (
    <>
      <div className="container-xl">
        <div className="row g-5 justify-content-between mt-5 mb-5">
          {movies.map((item) => {
            const { id, title, poster_path, vote_average, overview } = item;
            return (
              <div className="col-lg-6" key={id}>
                <div className="card border-danger h-100">
                  <div className="row g-4">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                      <img
                        src={`${baseUrlPosters}${poster_path}`}
                        className="img-fluid rounded-end"
                        alt={title}
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <h6>{vote_average}</h6>
                        <p className="card-text">{overview.slice(0, 160)}...</p>
                        <Link to={`/movie/${id}`}>
                          <button className="btn btn-danger">
                            more info
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
