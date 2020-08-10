export default function Test() {
  return (
    <>
    <h1 id="hello">
      Hi! I'm Caitlin: 
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
  )
}

export function getServerSideProps() {
  let queryParam = query.name

  return {
    props: {
      queryParam,
    }
  }
}

