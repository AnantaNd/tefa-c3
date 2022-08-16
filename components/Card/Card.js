import Image from "next/image"
import style from './Card.module.css'
import img from '../../image/2.jpg'


export default function Card ({location, rating, title, desc}){
  return (
    <>
      <div className={style.card}>
        <div className={style.wrap_img}>
          <p className={style.location}>{location}</p>
          <div className={style.img_card}></div>
        </div>
        <div className={style.content}>
          <p className={style.rating}>rating : {rating}</p>
          <h1 className={style.title}>{title}</h1>
          <p className={style.description}>{desc}</p>
        </div>
      </div>
    </>
  )
}