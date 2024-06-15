// Importazione del componente Container da react-bootstrap
import { Container } from 'react-bootstrap';

// Definizione del componente funzionale About
function About() {
  return (
    // Container di react-bootstrap per fornire un layout strutturato e responsivo
    <Container>
      <h1 className='text-center mt-4' data-testid={'about-pages'}>About</h1>
    </Container>
  );
}

// Esportazione del componente About come default export
export default About;
