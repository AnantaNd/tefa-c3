import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <Header/>
        <section id="section1">
          <div className="container_hero">
              <div className='hero_img'></div>
              <div className="hero_content">
                <h1 className="hero_title">Hunger App</h1>
                <p className="hero_description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                <Link href="#section2">
                  <p className="explore_label">Explore Restaurant</p>
                </Link>
              </div>
          </div>
        </section>
        <section className="explore" id='section2'>
          <div className="container_card">
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
          </div>
        </section>
        {/* <div>
          <Link href="#section1">
            <a className="top_btn">Top</a>
          </Link>       
        </div> */}
      <Footer/>
    </main>
  )
}
