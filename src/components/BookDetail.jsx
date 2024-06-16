// Importazione del file CSS per lo stile
import '../style/BookDetail.css';

// Importazione dei componenti da react-bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

// Importazione dei componenti Link e useParams da react-router-dom
import { Link, useParams } from 'react-router-dom';

import { useContext, useEffect } from 'react';
// Importa il contesto del tema
import { ThemeContext } from '../modules/Contexts';

// Importazione del componente CommentArea
import CommentArea from './CommentArea';

// Importazione dei file JSON contenenti i libri suddivisi per categoria
import fantasy from '../books/fantasy.json'; 
import history from '../books/history.json'; 
import horror from '../books/horror.json'; 
import romance from '../books/romance.json'; 
import scifi from '../books/scifi.json'; 


// Definizione del componente BookDetail
function BookDetail() {

  // Utilizza il contesto del tema per cambiare lo sfondo dark o ligth quando richiesto
  const [themeCtx, setThemeCtx] = useContext(ThemeContext); 

  // Uso del hook useParams per ottenere i parametri asin e category dall'URL
  const { asin, category } = useParams();

  // Mappa delle categorie con i rispettivi libri
  const categories = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi
  };

  // Estrazione dei libri della categoria corrente, oppure un array vuoto se la categoria non esiste
  const books = categories[category] || [];
  // Ricerca del libro specifico in base al parametro asin
  const book = books.find((b) => b.asin.includes(asin));

  // Se il libro non viene trovato, mostra un messaggio di errore
  if (!book) {
    return (
      <Container className={'book-not-found bg-' + themeCtx}>
        <div className='content'>
          <h2 className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>Opps! 🤔 Book not found</h2>
          <p className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>I'm sorry, the book you were looking for is not available</p>
          <Link 
            to={category === 'fantasy' ? '/' : `/${category}`} 
            className={themeCtx === 'dark' ? 'nav-link btn-back mb-4' : 'nav-link btn-back mb-4'}
          >
            Back to Books
          </Link>
        </div>
    </Container>
    );
  }

  // Cambio il titolo del documento e si aggiorna al variare del valore dell'array delle dipendenza impostato sul titolo del libro
  function changeTitle() {
    useEffect(() => {
      document.title = `Epic Books - ${category} - ${book.title}`;
    }, [book.title]);
  }
  
  changeTitle();

  // Render del componente
  return (      
    <Container>
      <Row>
        <Col md={5} className="d-flex justify-content-center content-detail">
          {/* Visualizzazione dell'immagine del libro */}
          <Image src={book.img} alt={book.title} className='shadow'/>
          {/* Visualizzazione del titolo del libro */}
        </Col>
        <Col md={7}>  
          <Row>
            <Col className='d-column justify-content-center content-detail'>
              <h3>Title: <span className='title-book'>{book.title}</span></h3>
              {/* Visualizzazione della categoria del libro */}
              <p>Category: <span className='category-book'>{book.category}</span></p>
              {/* Visualizzazione del prezzo del libro */}
              <p>Price: <span className='price-book'>€ {book.price}</span></p>
              {/* Link per tornare alla lista dei libri della categoria */}
              <Link to={category === 'fantasy' ? '/' : `/${category}`} className='nav-link btn-back'>Back to Books</Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className='mt-4'>
          {/* Area dei commenti per il libro selezionato */}
          <CommentArea asin={asin} />
        </Col>
      </Row>
    </Container>    
  );
}

// Esportazione del componente BookDetail
export default BookDetail;

