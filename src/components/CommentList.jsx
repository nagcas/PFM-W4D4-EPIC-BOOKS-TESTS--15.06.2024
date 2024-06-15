// Importazione del file CSS per lo stile
import '../style/CommentList.css';

// Importazione dei componenti da React-Bootstrap e dei componenti locali
import { Container, ListGroup, Accordion, Badge } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';
import { useContext } from 'react';
import { StarFill } from 'react-bootstrap-icons';
// Importazione di date-fns
import { format } from 'date-fns';

import DeleteComment from './DeleteComment';
import UpdateComment from './UpdateComment';


// Definizione del componente CommentList
function CommentList({ comments = [], setAdd, add }) {

  // Uso del contesto per il tema
  const [themeCtx, setThemeCtx] = useContext(ThemeContext); 

  // Render del componente
  return (
    <Container className='comment-list p-0' data-bs-theme={themeCtx} data-testid='component-comment'>
      <Accordion defaultActiveKey='1'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Comment List 
            <Badge bg='warning' className='m-2'>
              {comments.length}
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {/* Mappatura dei commenti per la visualizzazione */}
              {comments.length > 0 ? comments.map((comment) => (
                <ListGroup.Item key={comment._id} className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex flex-column'>
                    <div>{Array.from({ length: comment.rate }).map((_, index) => <StarFill key={index} color='#f0f329' />)}</div>
                    <small className='text-muted'>{format(new Date(comment.createdAt), 'dd/MM/yyyy HH:mm')}</small>
                  </div>
                  <div className='flex-grow-1 mx-3 text-center'>
                    {comment.comment}
                  </div>
                  <div className='d-flex justify-content-end gap-2'>
                    {/* Componenti per eliminare e aggiornare il commento */}
                    <DeleteComment comment={comment} setAdd={setAdd} add={add} />
                    <UpdateComment comment={comment} setAdd={setAdd} add={add} />
                  </div>
                </ListGroup.Item>
              )) : <div className='text-center text-danger fs-5 text-uppercase'>no comments present</div>}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container> 
  );
}

// Esportazione del componente CommentList
export default CommentList;
