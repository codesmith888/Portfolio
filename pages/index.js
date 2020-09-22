import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Link from 'next/link'
import { ExternalLink } from 'react-external-link'


export default function Home() {
  

  
  return (
    <div>
      <Head>
        <title>Caitlin Smith</title>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes"></meta>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&family=Noto+Sans+JP:wght@500&display=swap" rel="stylesheet"></link>
        </Head>
  
      <main> 
        <Nav />
        <div className={styles.home}>
          <div className="row">
            <div className="col">
              <h1 className={styles.title}>Hi, I'm Caitlin!</h1>
              <h3 className={styles.subtitle}>Web Developer and Educator</h3>
            </div>
            <div className="col">
              <img id={styles.profilePhoto} src="/caitlin.png"/> 
            </div>
          </div>
          <div className="row">
            <h2 className={styles.introTwo}>Full stack web developer, multilingual educator and manager, with diverse experiences leading to a passion for creating new and innovative ways to combine education and technology. An effective communicator and collaborator motivated by the opportunity to produce data-driven outcomes, imaginative ideas and products that inspire.</h2>
            <h2 className={styles.introTwo}>When I am not singing letter and number songs (day job) or programming (passion/internship), you can find me volunteering through my church, spending time with family and friends (board games!) or hiking.</h2>
          </div>
          <div className="row" id="resumeButtonRow">
            <Link href="/CaitlinSmithResume.pdf" target="_blank" download>
              <button id= {styles.resumeButton} className="btn btn-lg btn-primary">Resume</button>
            </Link>
         </div>
          <h1 className={styles.skillsTitle}>Skills:</h1>
          <div className = "row">
            <div className=" container col">
              <img className="skillsImages" src="/javascriptlogo.png" />
              <div className="skillName">
                <div className="text">Javascript</div>
              </div>
            </div>
            <div className=" container col">
              <img className="skillsImages" src="/html.png" />
              <div className="skillName">
                <div className="text">HTML5</div>
              </div>
            </div>
            <div className=" container col">
              <img className="skillsImages" src="/css.png" />
              <div className="skillName">
                <div className="text">CSS</div>
              </div>
            </div>
            <div className=" container col">
              <img className="skillsImages" src="/postgres.png" />
              <div className="skillName">
                <div className="text">Postgres</div>
              </div>
            </div>
            <div className=" container col">
              <img className="skillsImages" src="/python.png" />
              <div className="skillName">
                <div className="text">HTML5</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" container col">
              <img className="skillsImages" src="/nodejs.png" />
              <div className="skillName">
                <div className="text">NodeJS</div>
              </div>
            </div>
            <div className=" container col">
              <img className="skillsImages" src="/react.png" />
              <div className="skillName">
                <div className="text">ReactJS</div>
              </div>
            </div>
            <div className=" container col"> 
              <img className="skillsImages" src="/mongodb.png" />
              <div className="skillName">
                <div className="text">MongoDB</div>
              </div>
            </div>
            <div className=" container col">
              <img className="skillsImages" src="/sequelize.png" />
              <div className="skillName">
                <div className="text">Sequelize</div>
              </div>
            </div>
            <div className=" container col">
              <img className="skillsImages" src="/express.png" />
              <div className="skillName">
                <div className="text">Express</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container col">
              <div className="text">Spanish Speaker</div>
            </div>
            <div className="container col">
              <div className="text">Communication</div>
            </div>
            <div className="container col">
              <div className="text">Collaboration</div>
            </div>
            <div className="container col">
              <div className="text">Outcomes Assessment</div>
            </div>
            <div className="container col">
              <div className="text">Data Analysis</div>
            </div>
          </div>
          <h1 className={styles.titleProjects}>Recent Projects:</h1>
          <div className="row">
            <ExternalLink className= {styles.container2} href="https://codesmith888.github.io/Addition-Rocket/">
              <h3 className={styles.projectTitles}>Addition Rocket</h3>
            </ExternalLink>
            <ExternalLink href="https://github.com/codesmith888/Addition-Rocket">
              <img className={styles.githubLink} src="/githublogo.png" />
            </ExternalLink>
          </div>
          <div className="row">
            <p className={styles.projectDescription}>Launch your way to addition fluency! Educational web application built using Javascript, HTML and CSS that focuses on addition fluency.</p>
          </div>
          <div className="row">
            <ExternalLink className= {styles.container2} href="https://codesmith888.github.io/Addition-Rocket/">
              <img className={styles.appPic} src="/additionRocket.png" />
            </ExternalLink>
            <div className={styles.appText}>
              <div className={styles.appTextWords}>Click to Play!</div>
            </div>
          </div>
          <div className="row">
            <ExternalLink className= {styles.container2} href="https://adulting101-dinnerpartyedition.herokuapp.com/">
              <h3 className={styles.projectTitleAdulting}>Adulting 101: Dinner Party Edition</h3>
            </ExternalLink>
            <ExternalLink href="https://github.com/codesmith888/Adulting-101_Dinner_Party_Edition">
              <img className={styles.githubLink} src="/githublogo.png" />
            </ExternalLink>
          </div>
          <div className="row">
            <p className={styles.projectDescription}>Full stack web application built using Node.js, Express.js, MySql and Sequelize with full RESTful routing. Users can create accounts and save recipes and menus.</p>
          </div>
          <div className="row">
            <ExternalLink className= {styles.container2} href="https://adulting101-dinnerpartyedition.herokuapp.com/">
              <img className={styles.appPic} src="/adulting101.png"/>
            </ExternalLink>
            <div className={styles.appText}>
              <div className={styles.appTextWords}>Click to check it out online!</div>
            </div>
          </div>
          <div className="row">
            <ExternalLink className= {styles.container2} href="https://condescending-spence-15bcf7.netlify.app/">
              <h3 className={styles.projectTitles}>World of Wonder</h3>
            </ExternalLink>
            <ExternalLink href="https://github.com/codesmith888/World-of-Wonder-frontend/blob/master/README.md">
              <img className={styles.githubLink} src="/githublogo.png" />
            </ExternalLink>
          </div>
          <div className="row">
            <p className={styles.projectDescription}>World of Wonder brings the  museum to you! An interactive full-stack web application built and designed with a team of four developers. Technologies MongoDB, MERN-auth, React.js, Node.js and CSS</p>
          </div>
          <div className="row">
            <ExternalLink className= {styles.container2} href="https://condescending-spence-15bcf7.netlify.app/">
              <img className={styles.appPic} src="/worldOfWonder.png" />
            </ExternalLink>
            <div className={styles.appText}>
              <div className={styles.appTextWords}>Click to check it out online!</div>
            </div>
          </div>
          <footer className="footer">
            <p>Created by ©CodeSmith888</p>
          </footer>
          </div>
      </main>
  </div>
  )
}




