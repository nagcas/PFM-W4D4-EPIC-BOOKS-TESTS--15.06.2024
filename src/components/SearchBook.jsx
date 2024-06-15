// Importazione dei componenti necessari da React-Bootstrap
import { Col, Form } from 'react-bootstrap';

// Definizione del componente SearchBook
function SearchBook({ search, handleSearch }) {
  return (
    <Col>
      {/* Form per la ricerca dei libri */}
      <Form.Group className='m-3'>
        <Form.Control 
          type='search' // Tipo di input: ricerca
          placeholder='Search book...' // Messaggio di esempio nel campo di ricerca
          value={search} // Valore della ricerca
          onChange={handleSearch} // Funzione per gestire la ricerca
        />
      </Form.Group> 
    </Col>
  );
}

// Esportazione del componente SearchBook
export default SearchBook;
