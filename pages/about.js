import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
      {/* <Navbar/> */}
      <div className={style.container}>
        <div className={style.about}>
          <h1 className={style.title}>about us</h1>
          <p className={style.desc_about}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className={style.comment}>
          <h1 className={style.title_comment}>comment</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className={style.input_email} {...register("email")} placeholder="email" />
            <textarea className={style.input_comment} {...register("comment")} placeholder="comment ..." />
            <button className={style.btn_submit} type='submit'>submit</button>
          </form>
        </div>
        <div className={style.display_comment}>
          <h1 className={style.title}>comment</h1>
          <div className={style.content_comment}>
            <p className={style.text_email}>{isData.email}</p>
            <p className={style.text_comment}>{isData.comment}</p>
          </div>
        </div>
      </div>
    </>
  )
}