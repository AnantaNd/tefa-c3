import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <Header/>
        <section className="section1">
          <div className="hero_container">
            <h1 className="hero_title">Hunger App</h1>
            <p className="hero_description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          <Link href="#section2">
            <p className="explore_label">Explore Restaurant</p>
          </Link>
        </section>
        <section className="explore" id='section2'>
          <div className="container_card">
            <div className="row">
              <div className="col">
                <Card 
                  location={'Bandung'}
                  title={'title'}
                  rating={'4.5'}
                  desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
              <div className="col">
                <Card 
                  location={'Jakarta'}
                  title={'title'}
                  rating={'3.5'}
                  desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
              <div className="col">
                <Card 
                  location={'Jakarta'}
                  title={'title'}
                  rating={'3'}
                  desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
              <div className="col">
                <Card 
                  location={'Bali'}
                  title={'title'}
                  rating={'4'}
                  desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
              <div className="col">
                <Card 
                  location={'Bali'}
                  title={'title'}
                  rating={'4'}
                  desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
              <div className="col">
                <Card 
                  location={'Jakarta'}
                  title={'title'}
                  rating={'4.5'}
                  desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
            </div>
          </div>
        </section>
      <Footer/>
    </main>
  )
}
