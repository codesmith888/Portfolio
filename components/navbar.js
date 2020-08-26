import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'
import styles from '../styles/Home.module.css'
import { ExternalLink } from 'react-external-link'


export default function Navbar() {

  return (
    <div className="navBar">
        <nav id={styles.nav} className="navbar-custom navbar">
          <a className="navTitle" href="/">Caitlin Smith</a>
          <ul className="nav">
            <li className="navItem">
              <ExternalLink href="https://github.com/codesmith888">
                <img className="socialMediaLinks" src="/githublogo.png" />
                </ExternalLink>
            </li>
            <li className="navItem">
              <ExternalLink href="https://www.linkedin.com/in/caitlin-e-smith/">
                <img className="socialMediaLinks" src="/linkedinlogo.png" />
              </ExternalLink>
            </li>
            <li className="navItem">
              <img className="socialMediaLinks" src="/envelope.png" />
            </li>
          </ul>
      </nav>
    </div>
  )
}