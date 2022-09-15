import Link from 'next/link'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function Home() {

  // const [dataAsync, setDataAsync] = useState([])
  const [dataPromise, setdataPromise] = useState([])
  
  // async wait fecthApi
  // async function fecthApiAsync(){
  //   try{
  //     const res = await fetch('./api/restaurant');
  //     const data = await res.json();
  //     console.log(data);
  //     setDataAsync(data);
  //   }catch(e){
  //     console.error(e);
  //   }
  // }

  // promise fecthApi
  const fecthApiPromise =()=> {
    const response = fetch('./api/restaurant');
    response
      .then(res => res.json())
      .then(data => { 
        setdataPromise(data) 
        console.log(data) 
      })
      .catch(e => { console.error(e)} );
  }

  useEffect(() =>{
    // fecthApiAsync();
    fecthApiPromise();
  },[])

  return (
    <main className="container">
      <Layout>
        <section id='description'>
          <Hero />
          <Link href="#menu">
            <p className="label-section">Explore Restaurant</p>
          </Link>
        </section>
        <section id='menu'>
          <div className="container_card">
            <div className="row">
              {dataPromise.map((restaurants)=>
                <Link href={`/favorite/${restaurants.id}`}>
                  <div className="col" key={restaurants.id}>
                    <Card
                      image={restaurants.image}
                      location={restaurants.location}
                      title={restaurants.title}
                      rating={`Rating: ${restaurants.rating}`}
                      desc={restaurants.description}
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
        <Link href="#description">
          <p className="label-section">back to top</p>
        </Link>
      </Layout>
    </main>
  )
}
// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/restaurant');
//   const data = await res.json();
//   try {
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (err) {
//     console.error(err);
//   }
// }
