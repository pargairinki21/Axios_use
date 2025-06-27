// component/Card.jsx
// export const Card = ({ movieData }) => {
//   const { Poster, imdbID, Title } = movieData;

//   return (
//     <li className="movie-card">
//       <div className="card-image">
//         <img src={Poster} alt={Title} />
//       </div>
//       <div className="card-content">
//         <h3>{Title}</h3>
//         <a href={`/movie/${imdbID}`}>
//           <button className="watch-button">Watch Now</button>
//         </a>
//       </div>
//     </li>
//   );
// };
// src/component/Card.jsx
export const Card = ({ movieData }) => {
  const { poster_path, title, vote_average, release_date } = movieData;

  return (
    <li className="movie-card">
      <div className="image-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>
      <div className="movie-details">
        <h3>{title}</h3>
        <p>Rating: {vote_average}</p>
        <p>Release: {release_date}</p>
      </div>
    </li>
  );
};
