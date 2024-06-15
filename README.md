# EPIC Books Project - Modulo M5 W4D4 - 18.06.2024

# TEST su EPIC Books

## Descrizione

Il progetto _"EPIC Books"_ è un'applicazione web sviluppata con React e Bootstrap-react, progettata per gestire la visualizzazione dei books e i commenti.
Gli utenti possono visualizzare, aggiungere, aggiornare ed eliminare commenti sui libri.
L'applicazione utilizza diverse librerie per gestire il frontend e le richieste HTTP.

L'interfaccia è composta dalla Navbar, da un alert che simula una hero con titolo e logo, e dalle card che elencano le categorie selezionabili dal menù nella Navbar. Al clic su una singola card, il bordo si seleziona di rosso e appare un bottone che permette di accedere al dettaglio del libro, con la visualizzazione delle recensioni e la possibilità di lasciarne una. Inoltre, è possibile modificare una recensione o cancellarla.

## Funzionalità

* Visualizzazione della lista di commenti sui libri
* Aggiunta di nuovi commenti
* Aggiornamento dei commenti esistenti
* Eliminazione dei commenti
* Gestione e visualizzazione delle date dei commenti
* Tematizzazione dell'applicazione
* Test finali

## Tecnologie Utilizzate

* **Vite-React**
* React-Bootstrap
* Axios
* Date-fns
* React-Bootstrap-Icons

## Installazione

## Librerie Utilizzate

Configurazione di un Nuovo Progetto React con Vite
Creare un nuovo progetto React con Vite, segui questi passaggi:

### Crea un nuovo progetto con Vite:

`npm create vite@latest`

Scegli un nome per il progetto (ad esempio, epic-books), seleziona React e poi JavaScript.

### Accedi alla cartella del progetto:

`cd epic-books`

### Installa le dipendenze:

`npm install`

### Esegui il server di sviluppo:

`npm run dev`

React: Libreria JavaScript per costruire interfacce utente.

`npm install react react-dom`

React-Bootstrap: Componente Bootstrap per React.

`npm install react-bootstrap bootstrap`

Axios: Client HTTP per fare richieste API.

`npm install axios`

Date-fns: Libreria per la manipolazione e la formattazione delle date.

`npm install date-fns`

React-Bootstrap-Icons: Icone di Bootstrap per React.

`npm install react-bootstrap-icons`

### Prerequisiti

Assicurati di avere installato Node.js e npm (Node Package Manager) sul tuo computer.

### Passaggi per l'installazione

1. **Clona il repository:**
   
   git clone https://github.com/nagcas/PFM-W4D4-EPIC-BOOKS-TESTS--15.06.2024.git

## Struttura del Progetto
```
EPI-BOOKS/
├── public/
│   ├── index.html
│   └── ...
├── books/
│   ├── fantasy.json
│   ├── history.json
│   ├── horror.json
│   ├── romance.json
│   └── scifi.json
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AddComment.jsx
│   │   ├── AllTheBooks.jsx
│   │   ├── BookDetail.jsx
│   │   ├── Browse.jsx
│   │   ├── CommentArea.jsx
│   │   ├── CommentList.jsx
│   │   ├── DeleteComment.jsx
│   │   ├── MyFooter.jsx
│   │   ├── MyNav.jsx
│   │   ├── NotFound.jsx
│   │   ├── SearchBook.jsx
│   │   ├── SingleBook.jsx
│   │   ├── UpdateComment.jsx
│   │   └── Welcome.jsx
│   ├── img/
│   │   └── logo_book.png
│   ├── modules/
│   │   ├── ApiAxios.js
│   │   └── Contexts.js
│   ├── style/
│   │   ├── AddComment.css
│   │   ├── AllTheBook.css
│   │   ├── BookDetail.css
│   │   ├── CommentList.css
│   │   ├── MyFooter.css
│   │   ├── MyNav.css
│   │   ├── NotFound.css
│   │   ├── SingleBook.css
│   │   ├── UpdateComment.css
│   │   └── Welcome.css
│   ├── App.css
│   ├── App.jsx
│   ├── App.test.jsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
├── vite.config.js
└── ...
```

## TEST ESEGUITI

I test vengono eseguiti con il comando da terminale:

`npm run test`

```
/* 
  ---------------------------------------------------------------
  Test n. 1
  Verifica che il componente Welcome venga montato correttamente.
  ---------------------------------------------------------------
*/

```

```
/* 
  ----------------------------------------------------------------
  Test n. 2
  Verifica che vengano effettivamente renderizzate tante bootstrap
  cards quanti sono i libri nel file json utilizzato.
  ----------------------------------------------------------------
*/

```
```
/* 
  ------------------------------------------------------------------------
  Test n. 3
  Verifica che il componente CommentArea venga renderizzato correttamente.
  ------------------------------------------------------------------------
*/

```
```
/* 
  --------------------------------------------------------------------------
  Test n. 4 e 4a (primo e secondo libro)
  Verifica, magari con più tests, che il filtraggio dei libri tramite navbar
  si comporti come previsto.
  --------------------------------------------------------------------------
*/

```
```
/* 
  ---------------------------------------------------------------
  Test n. 5
  Verifica che, cliccando su un libro, il suo bordo cambi colore.
  ---------------------------------------------------------------
*/

```
```
/* 
  ----------------------------------------------------------------------
  Test n. 6
  Verifica che, cliccando su di un secondo libro dopo il primo, il bordo
  del primo libro ritorni normale.
  ----------------------------------------------------------------------
*/

```
```
/* 
  ------------------------------------------------------------------
  Test n. 7
  Verifica che all'avvio della pagina, senza aver ancora cliccato su
  nessun libro, non ci siano istanze del componente SingleComment
  all'interno del DOM.
  ------------------------------------------------------------------
*/

```
```
/* 
  ------------------------------------------------------------------
  Test n. 8
  Verifica infine che, cliccando su di un libro con recensioni, esse 
  vengano caricate correttamente all'interno del DOM.
  ------------------------------------------------------------------
*/

```
```
/* 
  -------------------------------------------------------
  Test n. 9
  Verifico se la pagina about viene visualizzata nel DOM.
  -------------------------------------------------------
*/

```
