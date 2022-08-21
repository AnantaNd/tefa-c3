import style from '../styles/Header.module.css'
import Link from 'next/link'
import { useState } from 'react'
import {FaBars} from 'react-icons/fa'

export default function Header (){
  const [isOpen, setIsOpen] = useState(false)
  const navOpen = () => setIsOpen(!setIsOpen)


  return (
    <div className={style.container}>
      <nav>
        <ul className={style.menu}>
          <li className={style.logo}><a href="#/">Hunger App</a></li>
          <li className={style.menuItem}><Link href="#about">About</Link></li>
          <li className={style.menuItem}><Link href="#Favorite">Favorite</Link></li>
          <li className={style.menuItem}><Link className="" href="#home">Home</Link></li>
        </ul>
      </nav>
    </div>
  )
}