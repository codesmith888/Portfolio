import Navbar from '../components/navbar'
import styles from '../styles/globals.css'

export default function Home() {

return (
  <div id="home">
    <div className="row">
      <Navbar />
    </div>
    <div className="row" >
      <div className="col-8">
        <h1 className="intro">Hi! I'm Caitlin:</h1>
      </div>
      <div className="col-8">
        <h2 className="intro">web developer, educator and lifelong learner.</h2>
      </div>
      <div className="col-4">
        <img id="profilePhoto" src="/photo.png"/> 
      </div>
      <button className="downloadResume btn btn-lg btn-primary">Resume</button>
    </div>

    <div className = "row">
      <img className="skillsImages" src="/javascriptlogo.png" />
      <img className="skillsImages" src="/html.png" />
      <img className="skillsImages" src="/css.png" />
      <img className="skillsImages" src="/postgres.png" />
      <img className="skillsImages" src="/python.png" />
    </div>
    <div className="row">
      <img className="skillsImages" src="/nodejs.png" />
      <img className="skillsImages" src="/react.png" />
      <img className="skillsImages" src="/mongodb.png" />
      <img className="skillsImages" src="/sequelize.png" />
      <img className="skillsImages" src="/express.png" />
    </div>
    <div className="row">
      <h3>Addition Rocket</h3>
      <img className="appPic" src="/additionRocket.png" />
    </div>
    <div className="row">
      <h3>Adulting 101: Dinner Party Edition</h3>
      <img className="appPic" src="/adulting101.png"/>
    </div>
    <div className="row">
      <h3>World of Wonder</h3>
      <img className="appPic" src="/worldOfWonder.png" />
    </div>
    <footer className="footer">
      <p>Created by ©CodeSmith888</p>
    </footer>
    <style jsx>
      {`
        #Home {
          color: #f88379;
          font-family: 'Education-Pencil';
        }
      `}
    </style>
  </div>
  )
}

