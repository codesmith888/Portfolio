import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Navbar() {
  useEffect(() => {
    document.getElementById("navbar").style.backgroundColor = "#e0ffdd";
  }, [])
  return (
    <div>
      <Head>
        <title>
          Caitlin Smith: Web Developer, Educator and Lifelong Learner
        </title>
      </Head>
      <navbar id="navbar">
        <ul>
          <li>
           <Link href="/">
            <a className="navbar">Home</a>
           </Link>
          </li>
          <li>
            <Link href="/about">
              <a class="navbar">About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a class="navbar">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a class="navbar">Contact Me!</a>
            </Link>
          </li>
        </ul>
      </navbar>
    </div>
  )
}