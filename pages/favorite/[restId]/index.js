import { useState } from "react";
import Navbar from "../../../components/Navbar";
import style from "../../../styles/Favorite.module.css";

export default function Favorite({data}){
  
  const [isData, setIsData] = useState(data);
  const [count, setCount] = useState(0);

  // console.log(isData.menu[0].nameMenu)

  const handleReset =(id)=>{
    data.menu.map((menu)=>{
      if(menu.idMenu === id ){
        console.log(menu.idMenu);
        return setCount(0)
      }
    })
  }
  const handleUpOrder =(id)=>{
    data.menu.map((menu)=>{
      if(menu.idMenu === id ){
        console.log(menu.idMenu);
        return setCount(count++)
      }
    })  
  }
  const handleDownOrder =(id)=>{
    data.menu.map((menu)=>{
      if(menu.idMenu === id){
        if(count === 0){
          return setCount(0);
        }else{
          return setCount(count--);
        }
      }
    })
  }

  return (
    <>
      <Navbar/>
      <div className={style.container}>
        <h1 className={style.title}>{isData.title}</h1>
      </div>
      <div className={style.container_content}>
        <h2 className={style.sub_title}>menu</h2>
        <div className={style.row}>
          {isData?.menu?.map((menu, idx)=>(
            <div key={idx} className={style.col}>
              <div className={style.card}>
                <img src={menu.imgMenu} alt={menu.nameMenu} className={style.img_card}/>
                <div className={style.content}>
                  <h1 className={style.title_card}>{menu.nameMenu}</h1>
                  <p className={style.price_card}>Rp. {menu.price}</p>
                  <p className={style.total}>total: Rp.{menu.price*count}</p>
                  <p className={style.ordered}>
                    Ordered: {count}
                    <span>
                      <button className={style.btn_reset} onClick={()=>handleReset(menu.idMenu)}>cancel</button>
                    </span>
                  </p>
                </div>
                <button className={style.btn} onClick={()=>handleUpOrder(menu.idMenu)}>+</button>
                <button className={style.btn} onClick={()=>handleDownOrder(menu.idMenu)}>-</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export async function getServerSideProps({params}) {
  const res = await fetch('http://localhost:3000/api/restaurant/'+params.restId);
  const data = await res.json();
    return {
      props: {
        data,
      },
    };
}
