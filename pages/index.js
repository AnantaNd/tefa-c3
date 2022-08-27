import Link from 'next/link'
import Card from '../components/Card'
import Layout from '../components/Layout'

export default function Home({data}) {
  return (
    <main className="container">
      <Layout>
        <Link href="#menu">
          <p className="label-section">Explore Restaurant</p>
        </Link>
        <div className="container_card">
          <div className="row">
            {data.map((restaurant)=>
              <div className="col" key={restaurant.id}>
                <Card
                  image={restaurant.image}
                  location={restaurant.location}
                  title={restaurant.title}
                  rating={restaurant.rating}
                  desc={restaurant.description}
                />
              </div>
            )}
          </div>
        </div>
        <Link href="#description">
          <p className="label-section">back to top</p>
        </Link>
      </Layout>
    </main>
  )
}

export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/restaurant')
  const data = await res.json()

  return{props: {data}}
}