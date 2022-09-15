import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import style from '../styles/Navbar.module.css'

export default function Navbar (){
  const [isOpen, setIsOpen] = useState(false)
  const navOpen = () => {setIsOpen(!isOpen), console.log('click')}

  const navItem = [
    {name : 'home', link: '/'},
    {name : 'favorite', link: '/favorite'},
    // {name : 'galery', link: '/galery'},
    {name : 'about us', link: '/about'},
  ]


  return (
    <nav className={style.navbar}>
      <Link href='/'>
        <div className={style.logo}>Hunger<span> App</span></div>
      </Link>
      <ul className={!isOpen ? style.menu : style.menures}>
        {navItem.map((navItem, i)=>
          <li key={i} className={style.item}>
            <Link 
              href={navItem.link}>{navItem.name}</Link>
          </li>
        )}
      </ul>
      <div className={style.burger} onClick={navOpen}>
        {!isOpen? <FaBars/>:<FaTimes/>}
      </div>
    </nav>
  )
}