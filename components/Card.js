import style from '../styles/Card.module.css'


export default function Card ({location, rating, title, desc, image}){
  return (
    <>
      <div className={style.card}>
        <div className={style.wrap_img}>
          <p className={style.location}>{location}</p>
          <img className={style.img_card} src={image} alt={title} />
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