import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
        <style jsx global>
          {`
            @font-face {
              font-family: 'Education-Pencil';
              src:url(font) format('woff'),
                  url('Education-Pencil.ttf.svg#Education-Pencil') format('svg'),
                  url('Education-Pencil.ttf.eot'),
                  url('Education-Pencil.ttf.eot?#iefix') format('embedded-opentype'); 
              font-weight: normal;
              font-style: normal;
            }
          `}
        </style>
    </div>
  );  
}

export default MyApp
