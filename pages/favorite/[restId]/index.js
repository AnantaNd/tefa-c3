import { useState } from "react";
import style from "../../../styles/Favorite.module.css";

export default function Favorite({data}){
  
  const [isData, setIsData] = useState(data);
  const [count, setCount] = useState(0);

  // console.log(isData.menu[0].nameMenu)

  const handleReset =()=>{
    setCount(0)
  }
  const handleUpOrder =()=>{
    // data.menu.map((menu)=>{
    //   if(menu.idMenu === id ){
    //     console.log(menu.idMenu);
    //     setCount(count++)
    //   }
    // })  
    setCount(count++)
  }
  const handleDownOrder =()=>{
    // data.menu.map((menu)=>{
    //   if(menu.idMenu === id){
    //     if(count === 0){
    //       setCount(0);
    //     }else{
    //       setCount(count--);
    //     }
    //   }
    // })
    if(count === 0){
      setCount(0);
    }else{
      setCount(count--);
    }
  }
  const price = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };


  return (
    <>
      {/* <Navbar/> */}
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
                  <p className={style.price_card}>Rp. {price(menu.price)}</p>
                  <p className={style.total}>total: Rp. {price(menu.price*count)}</p>
                  <p className={style.ordered}>
                    Ordered: {count}
                    <span>
                      <button 
                        className={style.btn_reset}
                         onClick={()=>handleReset(menu._id)}>cancel
                      </button>
                    </span>
                  </p>
                </div>
                <button 
                  className={style.btn} 
                  onClick={()=>handleUpOrder(menu._id)}>+
                </button>
                <button 
                  className={style.btn}
                   onClick={()=>handleDownOrder(menu._id)}>-
                </button>
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
