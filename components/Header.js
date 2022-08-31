import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import style from '../styles/Header.module.css'

export default function Header (){
  const [isOpen, setIsOpen] = useState(false)
  const navOpen = () => setIsOpen(!isOpen)


  return (
    <nav className={style.navbar}>
      <div className={style.logo}><a href="#/">Hunger App</a></div>
      <ul className={!isOpen ? style.menu : style.menures}>
        <li className={style.item}><Link className="" href="#home">Home</Link></li>
        <li className={style.item}><Link href="#Favorite">Favorite</Link></li>
        <li className={style.item}><Link href="#about">About</Link></li>
      </ul>
      <div className={style.burger} onClick={navOpen}>
        {!isOpen? <FaBars/>:<FaTimes/>}
      </div>
    </nav>
  )
}