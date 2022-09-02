import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import style from '../styles/Navbar.module.css'

export default function Navbar (){
  const [isOpen, setIsOpen] = useState(false)
  const navOpen = () => setIsOpen(!isOpen)


  return (
    <nav className={style.navbar}>
      <div className={style.logo}>Hunger<span> App</span></div>
      <ul className={!isOpen ? style.menu : style.menures}>
        <li className={style.item}><Link href="/">Home</Link></li>
        <li className={style.item}><Link href="#Favorite">Favorite</Link></li>
        <li className={style.item}><Link href="#about">About</Link></li>
      </ul>
      <div className={style.burger} onClick={navOpen}>
        {!isOpen? <FaBars/>:<FaTimes/>}
      </div>
    </nav>
  )
}