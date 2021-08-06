import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../api/useFetch';
import getUrl from '../api/services';
import { baseUrlPosters } from '../api/poster_path';

function Details({ counter }) {
  const { movies } = useFetch(`${getUrl()}${counter}`);
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [overview, setOverview] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const newMovie = movies.filter((movie) => movie.id === parseInt(id));
    if (newMovie && newMovie.length > 0) {
      setTitle(newMovie[0].title);
      setPoster(newMovie[0].poster_path);
      setRating(newMovie[0].vote_average);
      setOverview(newMovie[0].overview);
    }
  }, [movies, id]);

  return (
    <>
      <main className="container-sm pt-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`${baseUrlPosters}${poster}`}
                className="img-fluid rounded-start"
                alt={title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <h5>{rating}</h5>
                <p className="card-text mt-5">{overview}</p>
                <Link to={counter >= 2 ? `/${counter}` : `/${''}`}>
                  <button className="btn btn-danger mt-2">go back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Details;
