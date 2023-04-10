import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../Layout";

export default function NasaApi() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const api_key = "IUOn0jGpgZ6nFjOrQrQZsMJdh6BQrkrsvjWfqudv";
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
      );
      setData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout title="Nasa API">
      <div className='container'>
        <h1>Nasa Rondom API</h1>

        <div className=''>
          <p>{data?.date}</p>
          <h4>{data?.title}</h4>
          <img src={data?.url} alt='' className='img-fluid h-50' />
          <p>{data?.explanation}</p>
        </div>
      </div>
    </Layout>
  );
}
