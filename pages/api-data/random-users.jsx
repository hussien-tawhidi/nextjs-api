import { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import styles from "/styles/random.module.css"
export default function RandomUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://randomuser.me/api/?results=9"
        );
        setData(response?.data?.results);
        console.log(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Layout title="Random User">
      <div className='container'>
        <h1>Random (9 Users)</h1>
        <hr/>
        <p>{data?.email}</p>
        <div className='row'>
          {data?.map((user) => (
            <div className='col-4'>
              <div className={`card mb-4 ${styles.customeCard} `}>
                <img
                  className={`card-img-top ${styles.profileImg}`}
                  src={user?.picture?.large}
                  alt={`Card image cap`}
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    <span>{user?.name?.title}</span>
                    <span className='mx-2'>{user?.name?.first}</span>
                    <span>{user?.name?.last}</span>
                  </h5>
                  <h6>{user?.email}</h6>
                  <p className='login-info'>
                    <span>{user?.login?.uuid}</span>
                    <br />
                    <span>{user?.login?.username}</span>
                    <br />
                    <span>Date of birth : {user?.dob?.date}</span>
                    <br />
                  </p>
                  <p className='phone'>Phone : {user?.phone}</p>
                  <p className='phone'>Cell : {user?.cell}</p>
                  {/* <p className='location'>
                    <p>Location : </p>
                    <span>{user?.location?.street?.number}</span>
                    <span className='mx-2'>{user?.location?.street?.name}</span>
                    <p>
                      <span>{user?.location?.city}</span> _
                      <span>{user?.location?.country}</span> _
                      <span>{user?.location?.postcode}</span>
                    </p> 
                    <p>
                      <p>Coordinates : </p>
                      <span>{user?.location?.coordinates?.latitude}</span> _
                      <span>{user?.location?.coordinates?.longitude}</span> _
                    </p>
                    <p>
                      <p>TimeZonde : </p>
                      <span>{user?.location?.timezone?.offset}</span> _
                      <span>{user?.location?.timezone?.description}</span>
                    </p>
                  </p> */}
                  {/* <p>{user?.gender}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
