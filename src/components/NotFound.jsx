// Importazione del file CSS per lo stile
import '../style/NotFound.css';

import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

// Importa il contesto del tema
import { ThemeContext } from '../modules/Contexts';
import { useContext, useEffect } from 'react';


function NotFound() {

  // Cambio il titolo del documento e si aggiorna nel momento in cui si renderizza il componente la prima volta
  function changeTitle() {
    useEffect(() => {
      document.title = 'Epic Books - Error 404';
    }, []);
  }
  
  changeTitle();

  // Utilizza il contesto del tema per cambiare lo sfondo dark o ligth quando richiesto
  const [themeCtx, setThemeCtx] = useContext(ThemeContext); 

  return (
    <>
      <Container className={'page-not-found bg-' + themeCtx}>
        <div className='content'>
          <h1 className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>4🤯4</h1>
          <h4 className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>Opps! Page not found</h4>
          <p className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>Sorry, the page you're looking for doesn't exist.</p>
          <Link to='/' className={themeCtx === 'dark' ? 'nav-link btn-notFound text-white' : 'nav-link btn-notFound'}>Back to Home</Link>
        </div>
      </Container>
    </>
  );
}

// Esportazione del componente NotFound
export default NotFound;