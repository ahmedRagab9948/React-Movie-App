import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const CardMovie = ({ movie }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 py-4">
      <Link to={`/movie/${movie.id}`}>
        <div className="content">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt="logo"
          />
          <div className="over_lay d-flex align-items-center justify-content-center">
            <div className="info text-center">
              <p>{movie.title}</p>
              <p>{movie.release_date}</p>
              <p>Language : {movie.original_language}</p>
              <p>
                <BsFillStarFill className="star" /> {movie.vote_average}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardMovie;
