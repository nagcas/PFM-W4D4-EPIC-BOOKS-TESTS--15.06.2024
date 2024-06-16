// Importazione del file CSS per lo stile
import '../style/AddComment.css'

// Importazione di hook e componenti necessari da React e React-Bootstrap
import { useContext, useState } from 'react';
import { Container, Accordion, Form, Button, Alert } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';

// Importazione della configurazione di Axios
import axios from '../modules/ApiAxios';

// Definizione del componente AddComment
function AddComment({ elementId, setAdd, add }) {
  
  // URL dell'API per i commenti
  // const url = 'https://striveschool-api.herokuapp.com/api/comments';
  
  // Uso del contesto per il tema e definizione degli stati locali
  const [themeCtx] = useContext(ThemeContext);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState('');

  // Stato locale per il form dei commenti
  const [FormDataComment, setFormDataComment] = useState({
    comment: '',
    rate: 0,
    elementId: elementId
  });

  // Funzione per gestire i cambiamenti nel campo del commento
  let handleCommentChange = (e) => {
    setFormDataComment({
      ...FormDataComment,
      comment: e.target.value,
      elementId: elementId
    });
  };

  // Funzione per gestire i cambiamenti nel campo della valutazione
  let handleRateChange = (e) => {
    setFormDataComment({
      ...FormDataComment,
      rate: e.target.value,
      elementId: elementId
    });
  };

  // Funzione per inviare il commento
  let sendComment = () => {
    console.log(FormDataComment);

    // Controllo se il commento è vuoto
    if (FormDataComment.comment.trim() === '') {
      setError('Comment is required.');
      return;
    }

  // Invio del commento tramite fetch (commentata perchè utilizzo axios)
  //   fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(FormDataComment),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: token
  //     }
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setMessage(true);
  //     setFormDataComment({ comment: '', rate: 0, elementId: elementId });
  //     setAdd(!add);
  //   })
  //   .catch((error) => console.error(error));
  // };

    // Invio del commento attraverso la libreria Axios
    axios.post('/comments', FormDataComment)
      .then((response) => {
        console.log(response.data);
        setMessage(true);
        setFormDataComment({ comment: '', rate: 0, elementId: elementId });
        setAdd(!add);
      }).catch((error) => console.error(error));
  };

  // Render del componente
  return (
    <Container className='comment-add p-0' data-bs-theme={themeCtx}>
      <Accordion defaultActiveKey='1'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Add Comment</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className='mb-3' controlId='formComment'>
                <Form.Label>Review</Form.Label>
                <Form.Control 
                  type='text' 
                  placeholder='Enter your review and recommend this book... 😊' 
                  name='comment'
                  value={FormDataComment.comment}
                  onChange={handleCommentChange}
                />
              </Form.Group>
              <Form.Select 
                className='mb-3' 
                aria-label='select-rate' 
                name='rate'
                value={FormDataComment.rate}
                onChange={handleRateChange}
              >
                <option>Select Rate</option>
                <option value='1'>⭐</option>
                <option value='2'>⭐⭐</option>
                <option value='3'>⭐⭐⭐</option>
                <option value='4'>⭐⭐⭐⭐</option>
                <option value='5'>⭐⭐⭐⭐⭐</option>
              </Form.Select>
              <button  
                onClick={sendComment}
                className='btn btn-add'
              >
                Add Comment
              </button>
            </Form>
            {error && <Alert className='mt-4' variant='danger' onClose={() => setError('')} dismissible>{error}</Alert>}
            {message && <Alert className='mt-4' variant='success' onClose={() => setMessage(false)} dismissible>Comment sent successfully!</Alert>}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

// Esportazione del componente AddComment
export default AddComment;
