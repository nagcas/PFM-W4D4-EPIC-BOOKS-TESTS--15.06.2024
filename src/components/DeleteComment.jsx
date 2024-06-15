// Importazione dei hook e dei componenti necessari da React e React-Bootstrap
import { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { Trash3Fill } from 'react-bootstrap-icons';

import axios from '../modules/ApiAxios';

// Definizione del componente DeleteComment
function DeleteComment({ comment, setAdd, add }) {
  
  // URL dell'API per i commenti 
  // const url = 'https://striveschool-api.herokuapp.com/api/comments/';
  // const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjYwMTVmNTA3ZjBkMTAwMTUzZDhjYzUiLCJpYXQiOjE3MTc1NzMxMDksImV4cCI6MTcxODc4MjcwOX0.3cI16-CxRBTWmHyqNW77xPog-2OZ3eDpJI8L6W8hSWQ';

  // Stato locale per gestire la visualizzazione del messaggio di successo
  const [message, setMessage] = useState(false);

  // Funzione per rimuovere il commento
  const removeComment = (comment) => {

    // fetch(url + comment._id, {
    //   method: 'DELETE',
    //   headers: {
    //     Authorization: token
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   setMessage(true); // Mostra il messaggio di successo
    //   setAdd(!add); // Aggiorna lo stato per rifare il fetch dei commenti
    // })
    // .catch(error => console.error(error));

    axios.delete('/comments/' + comment._id)
      .then((response) => {
        console.log(response.data);
        setMessage(true); // Mostra il messaggio di successo
        setAdd(!add); // Aggiorna lo stato per rifare il fetch dei commenti
      })
      .catch(error => console.error(error)); 
  }

  // Render del componente
  return (
    <Container>
      <Button variant='outline-danger' className='float-end' onClick={() => removeComment(comment)}>
      <Trash3Fill />
      </Button>
      {message && (
        <Alert variant='success' onClose={() => setMessage(!message)} dismissible>
          Comment deleted successfully!
        </Alert>
      )}
    </Container>
  );
}

// Esportazione del componente DeleteComment
export default DeleteComment;
