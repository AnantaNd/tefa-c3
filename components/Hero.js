import style from '../styles/Hero.module.css'

export default function Hero () {
  return(
    <>
      <div className={style.hero_container}>
        <h1 className={style.hero_title}>Hunger App</h1>
        <p className={style.hero_description}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
    </>
  );
}