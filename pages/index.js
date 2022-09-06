import Link from 'next/link'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/api/restaurant')
      .then((res) => res.json())
      .then((loadData) => setData(loadData))
  },[])

  return (
    <main className="container">
      <Layout>
        <Link href="#menu">
          <p className="label-section">Explore Restaurant</p>
        </Link>
        <div className="container_card">
          <div className="row">
            {data.map((restaurants)=>
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