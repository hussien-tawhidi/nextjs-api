import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../Layout";

export default function MovieAPI() {
  const [getdata, seGettData] = useState([]);
  const resData = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=df0ecae9e6380bff97024eeff9f24d84`
      );
      const res = await data.json();
      seGettData(res?.results);
      console.log(getdata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    resData();
  }, []);
  const imagePath =
    "https://image.tmdb.org/t/p/w500/";
  return (
    <Layout title='Movie API'>
      <div className='movie-api'>
        <div className='row'>
          {getdata?.map((movie) => (
            <div className='col-3 mb-3' key={movie?.id}>
              <div className='card p-2 h-100 '>
                <img
                  unoptimized
                  src={imagePath + movie?.poster_path}
                  alt=''
                  className='card-img'
                />
                <p>{movie?.title}</p>
                <p>
                  <span>Release</span>
                  <span className='mx-3'>{movie?.release_date}</span>
                </p>
                <p>{movie?.vote_average}</p>
                <p>
                  <span>
                    <i class='bi bi-translate'></i>
                  </span>
                  <span className='mx-2'>{movie?.original_language}</span>
                </p>

                <p>{movie?.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
