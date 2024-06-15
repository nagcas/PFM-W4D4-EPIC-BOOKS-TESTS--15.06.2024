// Importazione del file CSS per lo stile
import '../style/SingleBook.css';
// Importa Placeholder, Spinner e altri componenti necessari da React Bootstrap
import { useContext } from 'react';
import { Col, Card, Button, Placeholder, Spinner } from 'react-bootstrap';

import { ThemeContext } from '../modules/Contexts';

import { useNavigate } from 'react-router-dom';

// Definizione del componente SingleBook
function SingleBook({ book, selected, setSelected }) {
  // Definizione dello stato locale per il tema e del contesto per il tema
  const [themeCtx] = useContext(ThemeContext);

  const navigate = useNavigate();

  // Render del componente
  return (
    <Col>
      {/* Carta rappresentante il singolo libro */}
      <Card
        data-testid={`card-book-${book.asin}`} // Aggiunto un data-testid con book.asin unico
        bg={themeCtx}
        data-bs-theme={themeCtx}
        className={selected === book.asin ? 'border-select card-item' : 'card-item'}
        onClick={() => setSelected(book.asin)} // Funzione per selezionare il libro
      >
        {/* Immagine del libro */}
        {book.img ? (
          <Card.Img variant='top' src={book.img} alt={book.title} data-testid={'card-img'} />
        ) : (
          <Placeholder as={Card.Img} animation='wawe' variant='light' data-testid={'card-img'}>
            <Placeholder.Image />
          </Placeholder>
          
        )}

        <Card.Body className='p-2'>
          {/* Titolo del libro */}
          <Card.Title className='style-title'>
            {book.title ? (
              book.title
            ) : (
              <Placeholder as={Card.Title} animation='wawe' variant='light'>
                <Placeholder xs={6} />
              </Placeholder>
            )}
          </Card.Title>

          {/* Categoria del libro */}
          <Card.Text>
            {book.category ? (
              `Category: ${book.category}`
            ) : (
              <Placeholder as={Card.Text} animation='wawe' variant='light'>
                <Placeholder xs={4} />
              </Placeholder>
            )}
          </Card.Text>

          {/* Prezzo del libro */}
          <Card.Text>
            {book.price ? (
              `Price: € ${book.price}`
            ) : (
              <Placeholder as={Card.Text} animation='wawe' variant='light'>
                <Placeholder xs={2} />
              </Placeholder>
            )}
          </Card.Text>
        </Card.Body>

        {/* Bottone per navigare verso i dettagli del libro */}
        <Button
          data-testid={`button-detail-${book.asin}`}
          className={selected === book.asin ? 'btn-success w-75 m-auto mb-4 btn-animated' : 'd-none'}
          onClick={() => navigate(`/book-detail/${book.asin}/${book.category}`)}
        >
          Book Detail
        </Button>
      </Card>
    </Col>
  );
}

// Esportazione del componente SingleBook
export default SingleBook;