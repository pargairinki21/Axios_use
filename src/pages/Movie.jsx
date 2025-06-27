/* eslint-disable react-hooks/exhaustive-deps */
// pages/Movie.jsx
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Card } from "../component/Card";
// import "./Movie.css"; 

// export const Movie = () => {
//   const [data, setData] = useState([]);

//   const API = "https://www.omdbapi.com/?s=batman&apikey=64ad98d8";


//   const getMovieData = async () => {
//     try {
//       const response = await axios.get(API);
//       console.log("Fetched movies:", response.data.Search);
//       setData(response.data.Search || []);
//     } catch (error) {
//       console.error("API fetch failed:", error);
//     }
//   };

//   useEffect(() => {
//     getMovieData();
//   }, []);

//   return (
//     <ul className="movie-list">
//       {data.map((movie) => (
//         <Card key={movie.imdbID} movieData={movie} />
//       ))}
//     </ul>
//   );
// };
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Card } from "../component/Card";
// import "./Movie.css"; 

// export const Movie = () => {
//   const [data, setData] = useState([]);

//   const API = "https://api.themoviedb.org/3/discover/movie?api_key=f43ec82a5f24fe6190891894b7436c7a";

//   const getMovieData = async () => {
//     try {
//       const response = await axios.get(API);
//       console.log("Fetched movies:", response.data.results);
//       setData(response.data.results || []);
//     } catch (error) {
//       console.error("API fetch failed:", error);
//     }
//   };

//   useEffect(() => {
//     getMovieData();
//   }, []);

//   return (
//     <ul className="movie-list">
//       {data.map((currElement) => (
//         <Card key={currElement.id} movieData={currElement} />
//       ))}
//     </ul>
//   );
// };


import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../component/Card";


export const Movie = () => {
  const [data, setData] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_KEY;
  const API_URL = "https://api.themoviedb.org/3/discover/movie";

  const getMovieData = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          api_key: API_KEY,
          language: "en-US",
          sort_by: "popularity.desc",
          include_adult: false,
          include_video: false,
          page: 1,
        },
      });
      setData(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getMovieData();
  }, [getMovieData]);

//   return (
//     <ul className="movie-list">
//       {data.map((movie) => (
//         <Card key={movie.id} movieData={movie} />
//       ))}
//     </ul>
//   );
// };
return (
    <div className="container">
      <h1 className="heading">Movie Explorer</h1>

      <div className="search-bar">
        <input type="text" placeholder="Search movies..." />
        <button>Search</button>
      </div>

      <ul className="movie-list">
        {data.map((movie) => (
          <Card key={movie.id} movieData={movie} />
        ))}
      </ul>
    </div>
  );
};
