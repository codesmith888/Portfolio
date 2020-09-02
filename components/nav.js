import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'
import styles from '../styles/Home.module.css'
import { ExternalLink } from 'react-external-link'
import Navbar from 'react-bootstrap/Navbar'


export default function nav() {

  return (
    <div className="navigation">
        <nav id={styles.nav} className="navbar-custom navbar navbar-fixed-top navbar-expand-lg">
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
              <ExternalLink href="mailto:caitlinelizabeth888@gmail.com">
                <img className="socialMediaLinks" src="/envelope.png" />
              </ExternalLink>
            </li>
          </ul>
      </nav>
    </div>
  )
}