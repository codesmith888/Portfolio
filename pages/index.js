import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Resume from './Resume'
import { Link } from 'next/link'
import { Redirect } from 'react-router-dom'

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      View Resume
    </a>
  )
})

export default function Index() {
  

  function downloadResume() {

  }



  
  
  
  return (
    <div>
      <Head>
        <title>Caitlin Smith</title>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <style jsx global>
              {`
                @font-face {
                  font-family: 'Education-Pencil';
                  src:url(font) format('woff'),
                      url('Education-Pencil.ttf.svg#Education-Pencil') format('svg'),
                      url('Education-Pencil.ttf.eot'),
                      url('Education-Pencil.ttf.eot?#iefix') format('embedded-opentype'); 
                  font-weight: normal;
                  font-style: normal;
                }
              `}
        </style>
      </Head>

      <main> 
        <div className={styles.home}>
          <div className="row">
            <Navbar />
          </div>
          <div className="row">
            <div className="col">
              <h1 className={styles.title}>Hi! I'm Caitlin:</h1>
              <h2 className={styles.introTwo}>Full stack web developer, educator and lifelong learner with a passion for creating new and innovative ways to present information and ideas. An effective communicator and collaborator motivated by the opportunity to combine education and technology in order to produce data-driven outcomes, imaginative ideas and products that inspire. </h2>
              <Link id="resume" href="/Resume" passHref>
                <MyButton id= {styles.resumeButton} className="btn btn-lg btn-primary"/>
              </Link>
            </div>
            <div className="col">
              <img id={styles.profilePhoto} src="/photo.png"/> 
            </div>
          </div>
         
          <h1 className={styles.title}>Skills:</h1>
          <div className = {styles.skills}>
            <img className="skillsImages" src="/javascriptlogo.png" />
            <img className="skillsImages" src="/html.png" />
            <img className="skillsImages" src="/css.png" />
            <img className="skillsImages" src="/postgres.png" />
            <img className="skillsImages" src="/python.png" />
          </div>
          <div className={styles.skillsTwo}>
            <img className="skillsImages" src="/nodejs.png" />
            <img className="skillsImages" src="/react.png" />
            <img className="skillsImages" src="/mongodb.png" />
            <img className="skillsImages" src="/sequelize.png" />
            <img className="skillsImages" src="/express.png" />
          </div>
          <h1 className={styles.title}>Projects</h1>
          <div className="row">
            <div className="col">
              <h3 className={styles.projectTitles}>Addition Rocket</h3>
              <p className={styles.projectDescription}>Launch your way to addition fluency! Educational web application built using Javascript, HTML and CSS that focuses on addition fluency.</p>
            </div>
            <div className="col">
              <Link href="/additionRocket">
                <img className={styles.appPic} src="/additionRocket.png" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className={styles.projectTitles}>Adulting 101: Dinner Party Edition</h3>
              <p className={styles.projectDescription}>Full stack web application built using NodeJS, Express, MySql and Sequelize with full RESTful routing. Users can create accounts and save recipes and menus</p>
            </div>
            <div className="col">
              <Link href="/adulting101">
                <img className={styles.appPic} src="/adulting101.png"/>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className={styles.projectTitles}>World of Wonder</h3>
              <p className={styles.projectDescription}>an interactive full-stack web application built and designed with a team of four developers. Built with MongoDB, MERN-auth, ReactJS, NodeJS and CSS</p>
            </div>
            <div className="col">
              <Link href="/worldOfWonder">
                <img className={styles.appPic} src="/worldOfWonder.png" />
              </Link>
            </div>
          </div>
          <footer className="footer">
            <p>Created by ©CodeSmith888</p>
          </footer>
          <style jsx>
            {`
              #home {
                color: #DAF8DD;
                font-family: 'Education-Pencil';
              }
            `}
          </style>
        </div>
      </main>
  </div>
  )
}

