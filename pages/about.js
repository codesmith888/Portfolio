import Navbar from '../components/navbar'

export default function About() {
  return (
    <div>
      <Navbar />
      <>
    <h1 id="hello">
      Hi, I'm Caitlin: 
    </h1>
    <style jsx>
      {`
        #hello {
          color: #f88379;
          font-family: 'Education-Pencil';
        }
      `}
    </style>
    </>
    </div>
  )
}