import Link from 'next/link'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function Home() {

  const [dataAsync, setDataAsync] = useState([])
  const [dataPromise, setdataPromise] = useState([])
  
  // async wait fecthApi
  async function fecthApiAsync(){
    try{
      const res = await fetch('./api/restaurant');
      const data = await res.json();
      console.log(data);
      setDataAsync(data);
    }catch(e){
      console.error(e);
    }
  }

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
        </section>
        <Link href="#menu">
          <p className="label-section">Explore Restaurant</p>
        </Link>
        <div className="container_card">
          <div className="row">
            {dataPromise.map((restaurants)=>
              <div className="col" key={restaurants.id}>
                <Card
                  image={restaurants.image}
                  location={restaurants.location}
                  title={restaurants.title}
                  rating={restaurants.rating}
                  desc={restaurants.description}
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


// promise
// function cobaPromise(){
//   return new Promise((resolve, reject) => {
//     const waktu = 5000
//     if(waktu < 5000){
//       setTimeout(()=>{
//         resolve("selesai");
//       }, waktu);
//     }else{
//       reject("lama")
//     }
//   })
// }
// const coba = cobaPromise()
// coba
//   .then(() =>console.log(coba))
//   .catch(()=>console.log(coba))

//  async await
// async function cobaAsync(){
//   try{
//     const coba = await cobaPromise()
//     console.log(coba)
//   }catch(e){
//     console.error(e)
//   }
// }
// cobaAsync()

// tugas kelas
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('no-such-user.json')
//   .catch(alert);

// async function loadJson(url){
//   try{
//     const res = await fetch(url)
//     const data = await res.json()
//     return data;
//   }catch(e){
//     console.error(e)
//   }
// }