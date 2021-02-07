import React, { useEffect, useState } from "react"

import axios from "../../utils/axios"
import requests from "../../utils/requests"

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  console.log(movie)

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 160)}</h1>
      </div>
      <div className="banner--fadeBottom" />
      <style jsx>{`
        .banner {
          position: relative;
          height: 450px;
          color: white;
          object-fit: contain;
        }
        .banner_contents {
          margin-left: 30px;
          padding-top: 140px;
          height: 190px;
        }
        .banner_title {
          font-size: 3rem;
          font-weight: 800;
          padding-bottom: 0.3rem;
        }
        .banner_description {
          width: 45rem;
          line-height: 1.3;
          font-size: 0.8rem;
          padding-top: 1rem;
          height: 80px;
        }
        .banner--fadeBottom {
          height: 16.4rem;
          background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 0.61),
            #111
          );
        }

        button {
          text-align: center;
          vertical-align: middle;
        }
        .banner_button {
          cursor: pointer;
          color: #fff;
          outline: none;
          border: none;
          border-radius: 0.2vw;
          padding-left: 2rem;
          padding-right: 2rem;
          margin-right: 1rem;
          background-color: rgba(51, 51, 51, 0.5);
          padding-top: 0.5rem;

          padding-bottom: 0.5rem;
        }
        .banner_button:hover {
          color: #000;
          background-color: #e6e6e6;
          transition: all 0.2s;
        }
      `}</style>
    </header>
  )
}

export default Banner
