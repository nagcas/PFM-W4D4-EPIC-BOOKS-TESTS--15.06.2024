// Importazione del file CSS per lo stile
import '../style/AllTheBook.css';

// Importazione di componenti da React-Bootstrap e dei componenti locali
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

// Import SingleBook
import SingleBook from './SingleBook';

function AllTheBooks({ books, search, category }) {

  // Cambio il titolo del documento e si aggiorna al variare del valore dell'array delle dipendenza impostato sulla categoria del libro
  function changeTitle() {
    useEffect(() => {
      document.title = `Epic Books - ${category}`;
    }, [category]);
  }
  
  changeTitle();

  // Stato per tracciare il libro selezionato
  const [selected, setSelected] = useState(false);
  
  return (
    <Container className='content-books'>
      <Row>
        <Col md={12}>
          <h4 className='fs-5 text-secondary mb-3'>Books category: {category}</h4>
          <Row>
            {/* Filtro e mappatura dei libri in base al titolo e alla ricerca */}
            {books.filter((book) => book.title.toLowerCase().includes(search))
              .map((book) =>
              <SingleBook
                key={book.asin}
                book={book}
                selected={selected}
                setSelected={setSelected}
              />)
            }
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

// Esportazione del componente AllTheBooks
export default AllTheBooks;
