// Importazione del file CSS per lo stile
import '../style/UpdateComment.css';

// Importazione dei componenti da react e react-router-dom
import { useContext, useState } from 'react';
import { Container, Button, Alert, Modal, Form } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';
import { PencilSquare } from 'react-bootstrap-icons';

// Importazione della configurazione di Axios
import axios from '../modules/ApiAxios';

function UpdateComment({ comment, setAdd, add }) {
  // URL per le richieste di aggiornamento dei commenti e token per l'autenticazione
  // const url = 'https://striveschool-api.herokuapp.com/api/comments/';
  // const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjYwMTVmNTA3ZjBkMTAwMTUzZDhjYzUiLCJpYXQiOjE3MTc1NzMxMDksImV4cCI6MTcxODc4MjcwOX0.3cI16-CxRBTWmHyqNW77xPog-2OZ3eDpJI8L6W8hSWQ';

  // Stati locali per gestire lo stato dell'aggiornamento e la visibilità del modale
  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow] = useState(false);
  // Stato locale per memorizzare i dati del commento da modificare
  const [formDataComment, setFormDataComment] = useState({ comment: comment.comment, rate: comment.rate });
  // Contesto per il tema
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  // Funzione per mostrare il modale
  const handleShow = () => setShow(true);
  // Funzione per chiudere il modale
  const handleClose = () => setShow(false);

  // Funzione per gestire la modifica del campo commento
  const handleCommentChange = (e) => {
    setFormDataComment({
      ...formDataComment,
      comment: e.target.value,
    });
  };

  // Funzione per gestire la modifica del campo rate
  const handleRateChange = (e) => {
    setFormDataComment({
      ...formDataComment,
      rate: e.target.value,
    });
  };

  // Funzione per inviare la richiesta di aggiornamento del commento
  const handleUpdateComment = () => {
    // Fetch viene commentata perchè utilizzo la libreria axios
    // fetch(url + comment._id, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: token,
    //   },
    //   body: JSON.stringify(formDataComment),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setIsUpdate(true); // Imposta lo stato di aggiornamento a true per mostrare il messaggio di successo
    //     setAdd(!add); // Aggiorna lo stato per rifare il fetch dei commenti
    //     handleClose(); // Chiude il modale
    //   })
    //   .catch((error) => console.error(error));

    // Utilizzo axios per effettuare la chiamata put
    axios.put('/comments/' + comment._id, formDataComment)
      .then((response) => {
        console.log(response);
        setIsUpdate(true); // Imposta lo stato di aggiornamento a true per mostrare il messaggio di successo
        setAdd(!add); // Aggiorna lo stato per rifare il fetch dei commenti
        handleClose(); // Chiude il modale
      })
      .catch((error) => console.error(error));
  };

  // Render del componente
  return (
    <Container>
      {/* Bottone per aprire il modale di aggiornamento del commento */}
      <Button variant='outline-warning' className='float-end' onClick={handleShow}><PencilSquare /></Button>
      
      {/* Messaggio di successo dopo l'aggiornamento del commento */}
      {isUpdate && <Alert className='content-update m-0' variant='success' onClose={() => setIsUpdate(!isUpdate)} dismissible>Updated</Alert>}
      
      {/* Modale per l'aggiornamento del commento */}
      <Modal show={show} onHide={handleClose} animation={false} bg={themeCtx} data-bs-theme={themeCtx}>
        <Modal.Header closeButton>
          {/* Titolo del modale */}
          <Modal.Title className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>Modify comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form per inserire il nuovo commento e il nuovo rate */}
          <Form>
            <Form.Group className='mb-3' controlId='formComment'>
              <Form.Label className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>Comment</Form.Label>
              <Form.Control
                type='text'
                placeholder='Comment'
                name='comment'
                value={formDataComment.comment}
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Label className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>Rate</Form.Label>
            <Form.Select
              className='mb-3'
              aria-label='select-rate'
              name='rate'
              value={formDataComment.rate}
              onChange={handleRateChange}
            >
              <option>Select Rate</option>
              {/* Opzioni per il rate */}
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Pulsante per chiudere il modale */}
          <Button variant='secondary' className='btn-noUpdate text-dark' onClick={handleClose}>
            Close
          </Button>
          {/* Pulsante per salvare le modifiche al commento */}
          <Button variant='success' className='btn-update text-dark' onClick={handleUpdateComment}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

// Esportazione del componente UpdateComment
export default UpdateComment;


