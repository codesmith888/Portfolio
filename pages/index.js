import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Resume from './Resume'

// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hi! I'm Caitlin:</h1>
      <h2 className="subtitle">web developer, educator and lifelong learner.</h2>
      <img id="profilePhoto" src="/photo.png"/>
      <img className="socialMediaLinks" src="/githublogo.png" />
      <img className="socialMediaLinks" src="/linkedinlogo.png" />
      <button className="downloadResume">Resume</button>
      <img className="skillsImages" src="/javascriptlogo.png" />
      <img className="skillsImages" src="/html.png" />
      <img className="skillsImages" src="/css.png" />
      <img className="skillsImages" src="/postgres.png" />
      <img className="skillsImages" src="/python.png" />
      <img className="skillsImages" src="/nodejs.png" />
      <img className="skillsImages" src="/react.png" />
      <img className="skillsImages" src="/mongodb.png" />
      <img className="skillsImages" src="/sequelize.png" />
      <img className="skillsImages" src="/jquery.png" />
      <img className="skillsImages" src="/express.png" />
      <footer className={styles.footer}>
       <p>Created by ©CodeSmith888</p>
      </footer>
    </div>
  )
}
