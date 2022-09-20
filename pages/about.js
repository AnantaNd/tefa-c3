import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from "../components/Navbar";
import style from "../styles/About.module.css";

export default function About(){
  const { register, handleSubmit } = useForm();
  const [isData, setIsData] = useState('');

  const onSubmit =(data)=> {
    setIsData(data)
    console.log(isData)
  };


  return(
    <>
      <Navbar/>
      <div className={style.container}>
        <h1 className={style.title}>about us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className={style.input_field} {...register("firstName")} placeholder="name" />
          <select className={style.input_field} {...register("gender")}>
            <option value="">select gender</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
          <button className={style.btn_submit} type='submit'>submit</button>
        </form>
        <div className={style.display}>
          <p className={style.display_name}>{isData.firstName}</p>
          <p className={style.display_gender}>{isData.gender}</p>
        </div>
      </div>
    </>
  )
}