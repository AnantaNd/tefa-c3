import Layout from "../components/Layout";
import style from "../styles/About.module.css";

export default function about(){
  return(
    <>
    <Layout>
    <h1 className={style.title}>About</h1>
      <div className={style.container}>
        <p className={style.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A in
            voluptatibus beatae nobis amet eos sint iusto culpa minima optio
            reiciendis maiores pariatur, hic laboriosam, velit totam! Alias,
            labore sapiente.
        </p>
      </div>
    </Layout>
    </>
  )
}