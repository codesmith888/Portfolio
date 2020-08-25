import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'
import styles from '../styles/Home.module.css'


export default function Navbar() {

  return (
    <div>
        <nav className="navbar-custom navbar">
          <a className="navTitle" href="/">Caitlin Smith</a>
          <ul className="nav">
            <Link href="/" className="navbarText">
              <a className="navItem">Home</a>
            </Link>
            <Link href="/About" className="navbarText">
              <a className="navItem">About</a>
            </Link>
            <Link href="/Projects" className="navbarText" >
              <a className="navItem">Projects</a>
            </Link>
            <Link href="/Contact" className="navbarText">
              <a className="navItem">Contact Me!</a>
            </Link>
            <li className="navItem">
              <img className="socialMediaLinks" src="/githublogo.png" />
            </li>
            <li className="navItem">
              <img className="socialMediaLinks" src="/linkedinlogo.png" />
            </li>
            <li className="navItem">
              <img className="socialMediaLinks" src="/envelope.png" />
            </li>
          </ul>
      </nav>
    </div>
  )
}