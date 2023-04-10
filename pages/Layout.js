import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        {/* bootstrap css */}
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ'
          crossorigin='anonymous'></link>
        {/* bootstrap js */}
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe'
          crossorigin='anonymous'></script>
        {/* bootstrap icon */}
        <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.4/font/bootstrap-icons.min.css'></link>
      </Head>
      <ul className='nav nav-tabs my-2'>
        <li className='nav-item'>
          <Link className='nav-link' aria-current='page' href='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className='nav-link '
            aria-current='page'
            href='/api-data/api-food'>
            Food
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' href='/api-data/nasa-api'>
            nasa
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className='nav-link '
            aria-current='page'
            href='/api-data/random-users'>
            Rondom User
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className='nav-link '
            aria-current='page'
            href='/api-data/movie-api'>
            Movie API
          </Link>
        </li>
      </ul>
      <div>{children}</div>
    </>
  );
}