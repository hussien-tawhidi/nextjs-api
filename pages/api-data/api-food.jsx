import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout";

export default function News() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=56fb6807fb1844d5b1c0f2dd7141abab"      );
      setData(response?.data?.recipes);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout title='Food API'>
      <div className='container'>
        <div className='d-flex justify-content-center direction-column align-items-center'>
          <div className='content'>
            {data?.map((re) => (
              <div className='card'>
                <h1 className='p-3 text-center'>Food Rondom API</h1>
                <img src={re.image} alt='' className='img-fluid card-img' />
                <div className='card-body'>
                  <a href='sourceUrl'>{re?.sourceName}</a>
                  <h5 className='card-title'>{re.title}</h5>
                  <p>{re?.creditsText}</p>
                  <p>PRICE : ${re?.pricePerServing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
