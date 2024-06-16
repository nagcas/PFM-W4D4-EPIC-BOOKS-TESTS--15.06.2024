import { useEffect } from "react";
import { Container } from "react-bootstrap";

function Browse() {

  // Cambio il titolo del documento e si aggiorna nel momento in cui si renderizza il componente la prima volta
  function changeTitle() {
    useEffect(() => {
      document.title = 'Epic Books - Browse';
    }, []);
  }
  
  changeTitle();

  return (
    <Container>
      <h1 className='text-center mt-4'>Browse</h1>
    </Container>
  );
}

// Esportazione del componente Browse
export default Browse;