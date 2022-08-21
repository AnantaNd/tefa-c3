import Layout from '../components/Layout'
import Card from '../components/Card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <Layout>
        <Link href="#menu">
          <p className="label-section">Explore Restaurant</p>
        </Link>
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
                location={'Bandung'}
                title={'title'}
                rating={'4.5'}
                desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
            <div className="col">
              <Card 
                location={'Bandung'}
                title={'title'}
                rating={'4.5'}
                desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
            <div className="col">
              <Card 
                location={'Bandung'}
                title={'title'}
                rating={'4.5'}
                desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
            <div className="col">
              <Card 
                location={'Bandung'}
                title={'title'}
                rating={'4.5'}
                desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
            <div className="col">
              <Card 
                location={'Bandung'}
                title={'title'}
                rating={'4.5'}
                desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}/>
              </div>
            </div>
        </div>
        <Link href="#description">
          <p className="label-section">back to top</p>
        </Link>
      </Layout>
    </main>
  )
}
