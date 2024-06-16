// Importazione del componente Container da react-bootstrap
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';


// Definizione del componente funzionale About
function About() {

  // Cambio il titolo del documento e si aggiorna nel momento in cui si renderizza il componente la prima volta
  function changeTitle() {
    useEffect(() => {
      document.title = 'Epic Books - About';
    }, []);
  }
  
  changeTitle();

  return (
    // Container di react-bootstrap per fornire un layout strutturato e responsivo
    <Container>
      <h1 className='text-center mt-4' data-testid={'about-pages'}>About</h1>
    </Container>
  );
}

// Esportazione del componente About come default export
export default About;
