// Importa il foglio di stile principale dell'applicazione
import './App.css';
// Importa lo stile CSS di Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Importa il hook useState da React
import { useState } from 'react'; 

// Importa il contesto del tema dall'applicazione
import { ThemeContext } from './modules/Contexts'; 

import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

 
// Importa il componente di navigazione personalizzato
import MyNav from './components/MyNav'; 
// Importa il componente del piè di pagina personalizzato
import MyFooter from './components/MyFooter'; 
// Importa il componente di benvenuto personalizzato
import Welcome from './components/Welcome'; 

// Importa il file JSON contenente libri fantasy
import fantasy from './books/fantasy.json'; 
// Importa il file JSON contenente libri di storia
import history from './books/history.json'; 
// Importa il file JSON contenente libri horror
import horror from './books/horror.json'; 
// Importa il file JSON contenente libri romantici
import romance from './books/romance.json'; 
// Importa il file JSON contenente libri di fantascienza
import scifi from './books/scifi.json'; 

// Importo i componenti necessari
import AllTheBooks from './components/AllTheBooks';
import About from './components/About'; 
import Browse from './components/Browse';
import BookDetail from './components/BookDetail';
import NotFound from './components/NotFound';



function App() {
  
  // Definisce lo stato della ricerca
  const [search, setSearch] = useState(''); 
  // Definisce la funzione per gestire la ricerca
  const handleSearch = (e) => { 
    setSearch(e.target.value);
  }
  // Definisce lo stato del tema
  const [theme, setTheme] = useState('light'); 

  return (
    <>
      {/* Fornisce il contesto del tema all'applicazione */}
      <ThemeContext.Provider value={[theme, setTheme]}> 
        <BrowserRouter basename='/'>
        {/* Mostra il componente di benvenuto */}
        <Welcome /> 
        {/* Mostra la barra di navigazione personalizzata */}
        <MyNav search={search} handleSearch={handleSearch} />

        <Routes>
          <Route index element={ <AllTheBooks books={fantasy} search={search} category={'Fantasy'} />} />
          <Route path='/about' element={ <About />} />
          <Route path='/browse' element={ <Browse />} />
          
          <Route path='/history' element={ <AllTheBooks books={history} search={search} category={'History'} />} />
          <Route path='/horror' element={ <AllTheBooks books={horror} search={search} category={'Horror'} />} />
          <Route path='/romance' element={ <AllTheBooks books={romance} search={search} category={'Romance'} />} />
          <Route path='/scifi' element={ <AllTheBooks books={scifi} search={search} category={'Scifi'} />} />
        
          <Route path='/book-detail/:asin/:category' element={ <BookDetail />} />

          <Route path='*' element={ <NotFound />} />
        </Routes>

        {/* Mostra il footer di pagina */}
        <MyFooter /> 
      </BrowserRouter>
    </ThemeContext.Provider>
  </>
  )
}

// Esporta il componente App come predefinito
export default App; 

