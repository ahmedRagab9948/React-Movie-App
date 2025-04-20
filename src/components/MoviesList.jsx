import CardMovie from "./CardMovie";
import Pagination from "./Pagination";

const MoviesList = ({ movies, getPage, pageCount }) => {
  return (
    <div className="row">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="text-center py-5 text-light">There are no movies....</h2>
      )}
      <Pagination getPage={getPage} pageCount={pageCount} />
    </div>
  );
};

export default MoviesList;
