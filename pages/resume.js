import Navbar from '../components/navbar';
import Link from 'next/link';


export default function Resume() {
  function downloadResume() {
    
  }

  return (
    <div id="Resume">
      <Navbar />
      <img src="/resume.png"/>
      <Link href="/files/myfile.pdf" target="_blank" download>
        <button className="resumeButton btn btn-lg btn-primary" onClick={downloadResume}>Download PDF</button>
      </Link>
      <style jsx>
            {`
              #Resume {
                color: #f88379;
                font-family: 'Education-Pencil';
              }
            `}
          </style>
    </div>
  )
}