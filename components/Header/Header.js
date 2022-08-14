import style from './Header.module.css'
import Link from 'next/link'

export default function Header (){
  return (
    <div className={style.container}>
      <header>
        <ul className={style.menu}>
          <li className={style.menuItem}>
            <Link href="#about">About</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="#Favorite">Favorite</Link>
          </li>
          <li className={style.menuItem}>
            <Link className="" href="#home">Home</Link>
          </li>
          <li className={style.logo}><a href="#/">Hunger App</a></li>
        </ul>
      </header>
    </div>
  )
}