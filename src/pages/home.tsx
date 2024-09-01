import React from 'react';
import '../styles/style.scss';
import Navbar from '../components/navbar';
function Home() {
  return (
    <>
      <div className='wrap'>
        <Navbar />
        <section className='banner-cta'>
          <div className='banner-text'>
            <h1>Olá, sou o <br />Rui Silva!</h1>
            <hr />
            <h4>Frontend Developer</h4>
          </div>
          <div className='banner-image'>

          </div>
          <div className='banner-cta-button'>
            <div className='button-area'>
              <button className='cta-button-first'>CONTRATA-ME</button>
            </div>
          </div>
        </section>
        <section className='about-me'>
          <div className='about-me-title'>
            <h3>SOBRE MIM</h3>
            <hr className='first-hr'></hr>
          </div>
        </section>
      </div>
    </>
  )
}
export default Home;
