import { signIn, signOut, useSession } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import style from '../styles/Navbar.module.css'


export default function Navbar (){
  const [isOpen, setIsOpen] = useState(false)
  const navOpen = () => {setIsOpen(!isOpen)}
  const {data:session} = useSession()

  return (
    <nav className={style.navbar}>
      <Link href='/'>
        <div className={style.logo}>Hunger<span> App</span></div>
      </Link>
      <ul className={!isOpen ? style.menu : style.menures}>
        {!session &&(
          <li className={style.item} onClick={()=>signIn()}>sign In</li>
        )}
        {session &&(
          <>
            <li className={style.item}>
              <Link href='/'>home</Link>
            </li>
            <li className={style.item}>
              <Link href='/favorite'>favorite</Link>
            </li>
            <li className={style.item}>
              <Link href='/about'>about</Link>
            </li>
            <li className={style.item} onClick={()=>signOut()}>sign Out</li>
          </>
        )}
      </ul>
      <div className={style.burger} onClick={navOpen}>
        {!isOpen? <FaBars/>:<FaTimes/>}
      </div>
    </nav>
  )
}
