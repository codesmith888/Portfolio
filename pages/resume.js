import Navbar from '../components/navbar'


export default function Resume() {
  return (
    <div>
      <Navbar />
      <img src="/resume.png"/>
      <button className="downloadResume">Download PDF</button>
      
    </div>
  )
}