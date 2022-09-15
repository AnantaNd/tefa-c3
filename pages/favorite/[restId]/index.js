import { useState } from "react";
import Card from "../../../components/Card";
import Navbar from "../../../components/Navbar";

export default function Favorite({data}){
  
  const [isData, setIsData] = useState(data)
  
  console.log(isData);

  return (
    <>
      <Navbar />
      <div className="hero_container">
        {/* <img src={isData.image} /> */}
        <h1 className="hero_title">{isData.title}</h1>
      </div>
      <div className='container_card'>
        <div className="row">
          {isData?.menu?.map((menu, idx)=>(
            <div key={idx} className="col">
              <Card
                image={menu.imgMenu}
                title={menu.nameMenu}
                rating={`Price Rp: ${menu.price}`}
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
