import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import style from "../../styles/Favorite.module.css";

export default function Favorite({data}){
  const [isData, setIsData] = useState(data)
  console.log(isData)

  useEffect(()=>{
    const filterData = isData.filter((i)=>(i.rating >= 3.5));
    const sortData = filterData.sort((a, b)=>(a.rating < b.rating));
    setIsData(sortData)
  }, []);

  return(
    <main className={style.container}>
      <Navbar/>
      <section>
      <div className={style.container_card}>
        <h1 className={style.sub_title}>restaurant favorite</h1>
        <div className={style.row}>
          {isData.map((rest)=>(
            <Link href={`/favorite/${rest.id}`} key={rest.id}>
            <div className={style.col}>
                <Card
                    image={rest.image}
                    location={rest.location}
                    title={rest.title} 
                    label={`rating ${rest.rating}`}
                    desc={rest.description}
                  />
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>
    </main>
  )
}
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/restaurant/');
  const data = await res.json();
    return {
      props: {
        data,
      },
    };
}