import Navbar from '../components/navbar'
import { ExternalLink } from 'react-external-link'



export default function additionRocket() {
  return (
    <div className="additionRocket">
      <Navbar />
      <h1 className="projectTitles">🚀Addition Rocket🚀</h1>
      <h3 className="projectTitles">GitHub:</h3>
      <ExternalLink className="links" href="https://github.com/codesmith888?tab=repositories"></ExternalLink> 
      <h3 className="projectTitles">Addition Rocket:</h3>
      <p className="description">This is an educational math game focusing on addition fluency. 
        The player answers as many addition problems as they can in one minute, and the game tracks
        the number of correct answers the player gets each round. Players can choose between 3 levels: 
        (Level 1 - Addition within Ten, Level Two - Addition within Twenty, Level Three - Addition within Fifty). 
        The number of correctly answered questions will determine how big the player’s winning rocket is and how 
        fast it moves when it launches at then end of the game. Less than 10 correct answers and your rocket does not take off…</p>
        <h3 className="projectTitles">Tech Stack:</h3>
        <ul className="description">
          <li>Vanilla Javascript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <h4 className="projectTitles">Game:</h4>
      <ExternalLink className="links" href="https://codesmith888.github.io/Addition-Rocket/"></ExternalLink>
      <h4 className="projectTitles">ReadMe:</h4>
      <ExternalLink className="links" href="https://github.com/codesmith888/Addition-Rocket"></ExternalLink>
      <footer className="footer">
        <p>Created by ©CodeSmith888</p>
      </footer>
    </div>
  )
}