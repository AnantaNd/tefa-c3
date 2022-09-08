import style from '../styles/Layout.module.css';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}) {
  return (
    <div className={style.layout}>
      <Navbar />
      <section id='menu'>
        {children}
      </section>
      <Footer/>
    </div>
  );
}