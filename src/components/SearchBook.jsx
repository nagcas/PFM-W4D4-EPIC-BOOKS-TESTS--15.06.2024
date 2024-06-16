// Importazione dei componenti necessari da React-Bootstrap
import { Col, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

// Definizione del componente SearchBook
function SearchBook({ search, handleSearch }) {
  return (
    <Col>
      {/* Form per la ricerca dei libri */}
      <InputGroup>
        <InputGroup.Text><Search /></InputGroup.Text>
        <Form.Control
          type='search' // Tipo di input: ricerca
          placeholder='Search book...' // Messaggio di esempio nel campo di ricerca
          value={search} // Valore della ricerca
          onChange={handleSearch} // Funzione per gestire la ricerca
          className='me-3'
        />
      </InputGroup>
    </Col>
  );
}

// Esportazione del componente SearchBook
export default SearchBook;