import { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import style from "../styles/Galery.module.css";


export default function Galery(){

  const [dataAsync, setDataAsync] = useState([])
  // const [dataPromise, setdataPromise] = useState([])
  
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
  // const fecthApiPromise =()=> {
  //   const response = fetch('./api/restaurant');
  //   response
  //     .then(res => res.json())
  //     .then(data => { 
  //       setdataPromise(data) 
  //       console.log(data) 
  //     })
  //     .catch(e => { console.error(e)} );
  // }

  useEffect(()=>{
    fecthApiAsync();
  },[])

  return(
    <main className={style.container}>
      <Layout>
        <div className={style.container_header}>
          <h1 className={style.header}>Galery</h1>
        </div>
        <div className={style.container_card}>
          <div className={style.row}>
            {dataAsync.map((restaurant)=>
              <div className={style.col} key={restaurant.id}>
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
      </Layout>
    </main>
  )
}