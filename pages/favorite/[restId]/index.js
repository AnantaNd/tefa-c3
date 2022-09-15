import { useState } from "react";
import Card from "../../../components/Card";
import Navbar from "../../../components/Navbar";
import style from "../../../styles/Favorite.module.css";
export default function Favorite({data}){
  
  const [isData, setIsData] = useState(data);

  
  // console.log(isData);

  return (
    <>
      <Navbar/>
      <div className={style.container}>
        <h1 className={style.title}>{isData.title}</h1>
      </div>
      <div className={style.container_card}>
        <h2 className={style.me}>menu</h2>
        <div className={style.row}>
          {isData?.menu?.map((menu, idx)=>(
            <div key={idx} className={style.col}>
              <Card
                image={menu.imgMenu}
                title={menu.nameMenu}
                label={`Price : Rp.${menu.price}`}
                location={menu.idMenu}
              />  
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch('http://localhost:3000/api/restaurant/' + params.restId);
  const data = await res.json();
  try {
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
