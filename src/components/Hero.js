import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getUrl from '../api/services';
import { useFetch } from '../api/useFetch';
import { baseUrlPosters } from '../api/poster_path';

function Hero({ counter }) {
  const { movies } = useFetch(`${getUrl()}${counter}`);
  const [id, setId] = useState('');
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [overview, setOverview] = useState('');

  useEffect(() => {
    const randomMovie = movies[Math.floor(Math.random() * 21)];
    if (randomMovie) {
      setTitle(randomMovie.title);
      setPoster(randomMovie.backdrop_path);
      setRating(randomMovie.vote_average);
      setOverview(randomMovie.overview);
      setId(randomMovie.id);
    }
  }, [movies]);

  return (
    <>
      <div id="hero" className="container-sm">
        <div className="card bg-dark border-danger">
          <img
            src={`${baseUrlPosters}${poster}`}
            className="card-img"
            alt={title}
            width="750px"
            height="500px"
          />
          <Link to={`/movie/${id}`} className="card-item text-white">
            <div className="card-img-overlay my-gradient">
              <h1 className="card-title">{title}</h1>
              <h5 className="card-text">{rating}</h5>
              <p className="card-text">{overview}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
