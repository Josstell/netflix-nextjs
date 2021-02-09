import React, { useState, useEffect } from "react"
import requests from "src/utils/requests"
import axios from "../../utils/axios"

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          movie =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>

      <style jsx>{`
        .row {
          color: white;
          margin-left: 20px;
        }
        .row_posters {
          display: flex;
          overflow-y: hidden;
          overflow-x: scroll;
          padding: 20px;
        }
        .row_posters::-webkit-scrollbar {
          display: none;
        }
        .row_poster {
          max-height: 100px;
          object-fit: contain;
          margin-right: 10px;
          transition: transform 450ms;
        }
        .row_poster:hover {
          transform: scale(1.08);
          opacity: 1;
        }
        .row_posterLarge {
          max-height: 250px;
        }

        .row_posterLarge:hover {
          transform: scale(1.08);
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default Row
