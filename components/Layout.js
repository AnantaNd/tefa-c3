import style from '../styles/Layout.module.css';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';

export default function Layout({children}) {
  return (
    <div className={style.layout}>
      <Navbar />
      <section id='description'>
        <Hero />
      </section>
      <section id='menu'>
        {children}
      </section>
      <Footer/>
    </div>
  );
}