import { FaCloudDownloadAlt } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);

  //get  movie by details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=22e70cdaca91efb3fc811d77b8398922&language=en-US`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="movie-detail">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt="logo"
          />
          <div className="link">
            <a href="/">
              Watch & download <FaCloudDownloadAlt className="down" />
            </a>
          </div>
        </div>
        <div className="col-lg-9 col-sm-12">
          <div className="detail">
            <h2>{movie.title}</h2>
            <p>
              <span>Date:</span> {movie.release_date}
            </p>
            <p>
              <span>Rate:</span> <BsFillStarFill className="star" />{" "}
              {movie.vote_average}
            </p>
            <p>
              <span>Voters:</span> {movie.vote_count}
            </p>
            <p>
              <span>Language:</span> {movie.original_language}
            </p>
          </div>
        </div>
      </div>
      <div className="overview">
        <div className="row">
          <div className="col-12">
            <div className="desc">
              <h3>Summary:</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="bttn text-center pb-5">
          <button>
            Back to Home <TbArrowBack className="back" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MovieDetails;
