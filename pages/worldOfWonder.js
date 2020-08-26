import Navbar from '../components/navbar'
import { ExternalLink } from 'react-external-link'


export default function WorldOfWonder() {
  return (
    <div>
      <Navbar />
    <h1>🌍 World of Wonder 🔭</h1>
    <p>World of Wonder is an interactive, online application dedicated to bringing a musuem to you. There are varieties of collections to view and artifacts to learn about! With text to speech features, and an ability to take notes on artifacts as you wander throughout the rooms, curate their own exhibit by saving artifacts, and the application is user friendly for all ages! Have fun exploring this world of wonder....</p>
    <h3>Tech Stack:</h3>
    <ul>
      <li>MERN-auth</li>
      <li>MongoDB</li>
      <li>Mongoose</li>
      <li>React</li>
      <li>React Bootstrap</li>
      <li>NodeJS</li>
      <li>CSS</li>
      <li>Auckland Museum API</li>
      <li>SpeechSynthsis API</li>
    </ul>
    <h3>Github:</h3>
    <ExternalLink href="https://github.com/codesmith888/World-of-Wonder-frontend/blob/master/README.md"></ExternalLink>
    <h3>World of Wonder:</h3>
    <ExternalLink href="https://condescending-spence-15bcf7.netlify.app/"></ExternalLink>
    </div>
  )
}