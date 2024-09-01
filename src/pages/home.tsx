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
            <p>
              Se você procura alguém que possa trazer seu projeto à vida com criatividade e precisão, estou pronto para colaborar e superar suas expectativas
            </p>
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
          <div className='about-me-content'>
            <p className='content'>Como desenvolvedor front-end apaixonado por criar experiências digitais impressionantes, eu transformo ideias em interfaces envolventes e intuitivas. Com uma sólida experiência e um olho atento para design responsivo e usabilidade, estou sempre em busca de novos desafios para inovar e melhorar.</p>
            <div className='about-me-cards-set'>
              <div className='cards'>
                <div className='card'>
                  <h1>+3</h1>
                  <p className='card-text'>Anos de<br /> Experiência</p>
                </div>
                <div className='card'>
                  <h1>+20</h1>
                  <p className='card-text'>Contribuições <br />Por mês</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='my-projects'>
          <div className='my-projects-title'>
            <h3>TRABALHOS <br />RECENTES</h3>
            <hr className='first-hr'></hr>
          </div>
        </section>
      </div>
    </>
  )
}
export default Home;
