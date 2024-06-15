// Importazione dei hook di React e dei componenti necessari
import { useEffect, useState } from 'react';
import { Spinner, Alert } from 'react-bootstrap';

import CommentList from './CommentList';
import AddComment from './AddComment';

// Importazione della configurazione di Axios
import axios from '../modules/ApiAxios';


// Definizione del componente CommentArea
function CommentArea({ asin }) {
  
  // URL dell'API per i commenti
  // const url = 'https://striveschool-api.herokuapp.com/api/books/';
  // const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjYwMTVmNTA3ZjBkMTAwMTUzZDhjYzUiLCJpYXQiOjE3MTc1NzMxMDksImV4cCI6MTcxODc4MjcwOX0.3cI16-CxRBTWmHyqNW77xPog-2OZ3eDpJI8L6W8hSWQ';
  
  // Definizione degli stati locali
  const [comments, setComments] = useState([]);
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);
  const [add, setAdd] = useState(false);

  // Effetto per caricare i commenti quando cambia l'asin o viene aggiunto un commento
  useEffect(() => {
    setIsEnableSpinner(true);
    // Fetch viene commentata perchè utilizzo la libreria axios
    // fetch(url + asin + '/comments/', {
    //   headers: {
    //     Authorization: token,
    //   },
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);
    //   setComments(data);
    //   setIsError(false);
    // })
    // .catch((error) => {
    //   console.error('Error loading...', error);
    //   setIsError(true);
    // })
    // .finally(() => setIsEnableSpinner(false));

    // Utilizzo axios per fare la chiamata get 
    axios.get('/books/' + asin + '/comments')
      .then((response) => {
        console.log(response);
        setComments(response.data);
        setIsError(false);
      })
      .catch((error) => {
        console.error('Error loading...', error);
        setIsError(true);
      })
      .finally(() => setIsEnableSpinner(false));

  }, [asin, add])

  // Render del componente
  return (
    <>
      {isEnableSpinner && <div className='text-center'><Spinner animation='grow' /></div>}
      {isError && <div className='text-center'><Alert variant='danger'>Error loading...</Alert></div>}
      <CommentList comments={comments} setAdd={setAdd} add={add} />
      <AddComment elementId={asin} setAdd={setAdd} add={add} />
    </>
  );
}

// Esportazione del componente CommentArea
export default CommentArea;

