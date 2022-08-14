import Image from "next/image"
import style from './Card.module.css'
import img from '../../image/2.jpg'


export default function Card ({location}){
  return (
    <>
      <div className={style.card}>
        <div className={style.wrap_img}>
          <p className={style.location}>{location}</p>
          <div className={style.img_card}></div>
        </div>
        <div className={style.content}>
          <p className={style.rating}>rating: 4.5</p>
          <h1 className={style.title}>Title</h1>
          <p className={style.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
        </div>
      </div>
    </>
  )
}