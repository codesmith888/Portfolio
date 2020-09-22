import Nav from '../components/nav';
import Link from 'next/link';


export default function Resume() {
  function downloadResume() {
    
  }

  return (
    <div id="Resume">
      <Nav />
      <img className="resume" src="/resume.png"/>
      <Link href="/CaitlinSmithResume.pdf" target="_blank" download>
        <button className="resumeButton btn btn-lg btn-primary">Download PDF</button>
      </Link>
    </div>
  )
}