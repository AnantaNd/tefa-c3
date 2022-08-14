import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Header/>
      <div className="main">
        <section className="hero_content">
          <h1 className="hero_title">Hunger App</h1>
          <p className="hero_description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
          {/* <button type="button" className="hero_btn">explore</button> */}
          {/* <Image src={img} alt='img' objectFit='cover'/> */}
        </section>
        <Link href="#section1">
          <a className="title">Explore Restaurant</a>
        </Link>
        <section className="explore" id='section1'>
          <div className="row">
            <div className="col">
              <Card location={'Bandung'}/>
            </div>
            <div className="col">
              <Card location={'Jakarta'}/>
            </div>
            <div className="col">
              <Card location={'Jakarta'}/>
            </div>
            <div className="col">
              <Card location={'Bali'}/>
            </div>
            <div className="col">
              <Card location={'Bali'}/>
            </div>
            <div className="col">
              <Card location={'Jakarta'}/>
            </div>
          </div>
        </section>
        {/* <section className="btn">
          <button>
            <div className="btn_up"></div>
          </button>
        </section> */}
      </div>
      <Footer/>
    </div>
  )
}
