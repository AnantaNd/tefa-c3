import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import style from '../styles/Layout.module.css'

export default function Layout({children}) {
  return (
    <div className={style.layout}>
      <Header />
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