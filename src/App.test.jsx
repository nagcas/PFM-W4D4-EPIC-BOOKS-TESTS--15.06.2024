import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { ThemeContext } from './modules/Contexts';

// Importo i componenti necessari
import App from './App';
import Welcome from './components/Welcome';
import CommentArea from './components/CommentArea';


afterEach(cleanup);

/* 
  ---------------------------------------------------------------
  Test n. 1
  Verifica che il componente Welcome venga montato correttamente.
  ---------------------------------------------------------------
*/

test('Test n.1: Il componente Welcome viene montato correttamente e visualizza il testo previsto.', () => {
  // Renderizzo il componente Welcome e simulo il contex del tema a dark
  render(
    <ThemeContext.Provider value='dark'>
      <Welcome />
    </ThemeContext.Provider>
  );
  
  // Trova il testo "Benvenuti su EPIC - Books" nel componente
  const welcomeText = screen.getByText(/Welcome EPIC Books/i);

  // Verifico se l'elemento "Welcome" è presente nel DOM
  expect(welcomeText).toBeInTheDocument();
});



/* 
  ----------------------------------------------------------------
  Test n. 2
  Verifica che vengano effettivamente renderizzate tante bootstrap
  cards quanti sono i libri nel file json utilizzato.
  ----------------------------------------------------------------
*/

test('Test n.2: Il numero dei libri presenti nel file "json fantasy" corrisponde al numero delle cards: "150".', async () => {
  // Renderizzo il componente App, simulando il rendering dell'applicazione principale.
  render(<App />);
  
  // Utilizzo findAllByTestId per selezionare tutti gli elementi con il data-testid 'card-img'.
  // Questa funzione restituisce una promessa che risolve un array di tutti gli elementi trovati.
  const nElementi = await screen.findAllByTestId('card-img');
  
  // Verifico che il numero degli elementi trovati corrisponda a 150, come mi aspettavo dal file json fantasy.
  expect(nElementi).toHaveLength(150);
});




/* 
  ------------------------------------------------------------------------
  Test n. 3
  Verifica che il componente CommentArea venga renderizzato correttamente.
  ------------------------------------------------------------------------
*/

test('Test n.3: Il componente "CommentArea" viene renderizzato correttamente.', () => {
  // Renderizzo il componente CommentArea e simulo il contesto del tema impostato a dark
  render(
    // Uso il ThemeContext.Provider per fornire il valore 'dark' al contesto del tema
    <ThemeContext.Provider value='dark'>
      <CommentArea />
    </ThemeContext.Provider>
  );

  // Utilizzo getByTestId per selezionare l'elemento con il data-testid 'component-comment'
  const comment = screen.getByTestId('component-comment');

  // Verifico che l'elemento con il data-testid 'component-comment' sia presente nel DOM
  expect(comment).toBeInTheDocument();
});




/* 
  --------------------------------------------------------------------------
  Test n. 4
  Verifica, magari con più tests, che il filtraggio dei libri tramite navbar
  si comporti come previsto.
  --------------------------------------------------------------------------
*/

// Primo test su "search book"
test('Test n.4: Il filtraggio dei libri si comporta come previsto. (primo libro)', async () => {
  // Renderizzo il componente App, simulando il rendering dell'applicazione principale.
  render(<App />);

  // Cerco l'input di ricerca tramite il suo placeholder
  const searchInput = screen.getByPlaceholderText(/Search book.../i);

  // Simulo un evento di cambio valore sull'input di ricerca
  // L'oggetto { target: { value: 'history' } } simula l'oggetto evento di un input
  fireEvent.change(searchInput, { target: { value: 'history' } });

  // Cerco tutti gli elementi "card-book-asin" filtrati dopo l'input di ricerca
  const filteredBooks = await screen.findAllByTestId('card-book-0765375079');

  // Verifico che ci sia un solo elemento "card-book" filtrato
  expect(filteredBooks).toHaveLength(1);

  // Verifico che l'unico elemento "card-book" filtrato contenga il testo "A Natural History of Dragons: A Memoir by Lady Trent (The Lady Trent Memoirs)"
  expect(screen.getByText('A Natural History of Dragons: A Memoir by Lady Trent (The Lady Trent Memoirs)')).toBeInTheDocument();
});

// Secondo test su "search book"
test('Test n.4a - extra: Il filtraggio dei libri si comporta come previsto. (secondo libro)', async () => {
  // Renderizzo il componente App, simulando il rendering dell'applicazione principale.
  render(<App />);

  // Cerco l'input di ricerca tramite il suo placeholder
  const searchInput_2 = screen.getByPlaceholderText(/Search book.../i);

  // Simulo un evento di cambio valore sull'input di ricerca
  // L'oggetto { target: { value: 'history' } } simula l'oggetto evento di un input
  fireEvent.change(searchInput_2, { target: { value: 'tarzan' } });

  // Cerco tutti gli elementi "card-book-asin" filtrati dopo l'input di ricerca
  const filteredBooks_2 = await screen.findAllByTestId('card-book-1598531646');

  // Verifico che ci sia un solo elemento "card-book" filtrato
  expect(filteredBooks_2).toHaveLength(1);

  // Verifico che l'unico elemento "card-book" filtrato contenga il testo "A Natural History of Dragons: A Memoir by Lady Trent (The Lady Trent Memoirs)"
  expect(screen.getByText('Tarzan of the Apes: A Library of America Special Publication')).toBeInTheDocument();
});



/* 
  ---------------------------------------------------------------
  Test n. 5
  Verifica che, cliccando su un libro, il suo bordo cambi colore.
  ---------------------------------------------------------------
*/

test('Test n.5: Il bordo della card cliccata cambia di colore in rosso.', async () => {
  // Renderizzo il componente App, simulando il rendering dell'applicazione principale.
  render(<App />);

  // Seleziono il il primo book della categoria fantasy con asin specifico
  const bookSelected = await screen.findByTestId('card-book-0316389706');

  // Simulo un click sull'elemento book selezionato
  fireEvent.click(bookSelected);

  // Verifico che l'elemento card abbia la classe CSS "border-select"
  expect(bookSelected).toHaveClass('border-select');

  // Verifico che l'elemento è presente nel DOM
  expect(bookSelected).toBeInTheDocument();
});



/* 
  ----------------------------------------------------------------------
  Test n. 6
  Verifica che, cliccando su di un secondo libro dopo il primo, il bordo
  del primo libro ritorni normale.
  ----------------------------------------------------------------------
*/

test('Test n.6: Al click del secondo libro il primo ritorna normale.', async () => {
  // Renderizzo il componente App, simulando il rendering dell'applicazione principale.
  render(<App />);

  // Trovo la card book 1, il primo della categoria fantasy con id specifico
  const cardBook_1 = await screen.findByTestId('card-book-0316438960');
  // Trovo la card book 2, il secondo della categoria fantasy con id specifico
  const cardBook_2 = await screen.findByTestId('card-book-0316389706');

  // Simulo il click sul primo book
  fireEvent.click(cardBook_1);

  // Verifico che la card book n. 1 abbia la classe selezionata
  expect(cardBook_1).toHaveClass('border-select');

  // Simulo il click sul secondo book
  fireEvent.click(cardBook_2);

  // Verifico che la card book n. 2 abbia la classe selezionata
  expect(cardBook_2).toHaveClass('border-select');

  // Verifico che la card del book n. 1 non abbia più la classe "border-select"
  expect(cardBook_1).not.toHaveClass('border-select');
});



/* 
  ------------------------------------------------------------------
  Test n. 7
  Verifica che all'avvio della pagina, senza aver ancora cliccato su
  nessun libro, non ci siano istanze del componente SingleComment
  all'interno del DOM.
  ------------------------------------------------------------------
*/

test('Test n.7: Il componente "SingleComment" o "CommentList" nella mia App non viene caricato al primo avvio del DOM.', () => {
  // Renderizzo il componente App, simulando il rendering dell'applicazione principale.
  render(
    <App />
  );
  
  // Cerco nel DOM un elemento che contiene il testo "Comment List".
  // Questo serve per verificare se il componente "CommentList" è stato renderizzato.
  const commentList = screen.queryByText(/Comment List/i);

  // Verifico che l'elemento "Comment List" non sia presente nel DOM al primo avvio dell'app.
  // Questo è fatto utilizzando la funzione `not.toBeInTheDocument()`, che passa il test se l'elemento non è trovato.
  expect(commentList).not.toBeInTheDocument();
});




/* 
  ------------------------------------------------------------------
  Test n. 8
  Verifica infine che, cliccando su di un libro con recensioni, esse 
  vengano caricate correttamente all'interno del DOM.
  ------------------------------------------------------------------
*/

test('Test n.8: Al click del button "Button Detail" del libro le recensioni vendono caricate.', async () => {
  // Renderizzo il componente App, simulando il rendering dell'applicazione principale.
  render(
    <App />
  );

  // Seleziono il primo libro della categoria fantasy con asin specifico
  const bookClick = await screen.findByTestId('card-book-0316389706');

  // Simulo un click sull'elemento card
  fireEvent.click(bookClick);

  // Verifico che l'elemento card abbia la classe CSS "border-select"
  expect(bookClick).toHaveClass('border-select');

  // Seleziono il button detail del libro con asin specifico
  const buttonView = await screen.findByTestId('button-detail-0316389706');

  // Verifico se il button detail viene caricato e visualizzato correttamente
  expect(buttonView).toBeInTheDocument();

  // Simulo un click sul button detail
  fireEvent.click(buttonView);

  // Seleziono l'elemento che contiene il testo "Comment List"
  const bookDetailComment = screen.queryByText(/Comment List/i);

  // Verifico se l'elemento "Comment List" è presente nel DOM
  expect(bookDetailComment).toBeInTheDocument();
});



/* 
  -------------------------------------------------------
  Test n. 9
  Verifico se la pagina about viene visualizzata nel DOM.
  -------------------------------------------------------
*/

test('Test n.9 - extra: La pagina About viene visualizzata nel DOM.', () => {
  // Renderizzo il componente App, simulando il rendering dell'applicazione principale.
  render(
    <App />
  );

  // Seleziono il menu about della navbar
  const selectedAbout = screen.getByTestId('page-about');
  
  // Simulo un click sul menu about della navbar
  fireEvent.click(selectedAbout);
  
  // Verifico se al click viene caricato il componente about
  const viewTitleAbout = screen.getByTestId('about-pages');
  expect(viewTitleAbout).toBeInTheDocument();
});

