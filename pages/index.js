import styles from "@/styles/Home.module.css";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout title='Nextjs API'>
      <div className='p-5 text-center bg-image rounded-3 position-relative'>
        <img
          src='https://mdbcdn.b-cdn.net/img/new/slides/041.webp'
          className=''
        />
        <div className='mask shadow-lg'>
          <div className='d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0'>
            <div className='text-white'>
              <h1 className='mb-3'>API some example</h1>
              <h4 className='mb-3'>Tried to fetch some API</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
