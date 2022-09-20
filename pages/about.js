import Navbar from "../components/Navbar";
import style from "../styles/About.module.css";

export default function about(){
  return(
    <>
      <Navbar/>
      <h1 className={style.title}>About</h1>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.col}>
            <div className={style.container_text}>
              <h1 className={style.subtitle}>description</h1>
              <p className={style.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A in
                voluptatibus beatae nobis amet eos sint iusto culpa minima optio
                reiciendis maiores pariatur, hic laboriosam, velit totam! Alias,
                labore sapiente.
              </p>
            </div>
          </div>
          <div className="col">
            <div className={style.container_text}>
              <h1 className={style.subtitle}>contact us</h1>
              <p className={style.description}>
                000-000-000
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}