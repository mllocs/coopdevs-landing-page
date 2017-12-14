import Head from 'next/head'
import Header from './Header'
import Footer from './Footer';
import pathPrefix from '../lib/pathPrefix';

const Layout = (props) => (
  <div>
    <Head>
      <title>Coopdevs</title>
      <link href="https://fonts.googleapis.com/css?family=Lato|Work+Sans" rel="stylesheet" />
    </Head>
    <div>
      <img src={pathPrefix('/static/bg/birds.jpg')} className='head_image' />
      <Header />
      <div className='content'>
        {props.children}
      </div>
      <Footer />
    </div>

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: Lato;
        font-weight: 300;
      }

      .head_image {
        position: absolute;
        width: 100%;
        opacity: 0.1;
        z-index: -100;
        filter: blur(2px);
      }

      h1, h2, h3, h4 {
        font-family: Work Sans;
      }

      a {
        color: #39BBD5;
      }

      .content {
        max-width: 70%;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Layout
