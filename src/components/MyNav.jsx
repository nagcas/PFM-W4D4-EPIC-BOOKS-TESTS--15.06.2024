// Importazione del file CSS per lo stile
import '../style/MyNav.css';

import { useContext } from 'react';
// Importazione del contesto per il tema
import { ThemeContext } from '../modules/Contexts';
import { Link } from 'react-router-dom';

// Importazione dei componenti necessari da React-Bootstrap e del componente locale
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { MoonStarsFill, SunFill } from 'react-bootstrap-icons';

import SearchBook from './SearchBook';



// Definizione del componente MyNav
function MyNav({ search, handleSearch }) {

  
  // Uso del contesto per il tema
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  // Render del componente
  return (
    <Navbar expand='lg' className='bg-body-tertiary shadow fixed-top' bg={themeCtx} data-bs-theme={themeCtx}>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='me-3'/>
        <Navbar.Brand>Epic Books</Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='nav-link'>Home</Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
            <Link to='/' className='nav-link'>Fantasy</Link>
              <Link to='/history' className='nav-link'>History</Link>
              <Link to='/horror' className='nav-link'>Horror</Link>
              <Link to='/romance' className='nav-link'>
                Romance
              </Link>
              <Link to='/scifi' className='nav-link'>Scifi</Link>
            </NavDropdown>
            <Link 
              to='/about' 
              className='nav-link'
              data-testid={'page-about'}
            >
                About
            </Link>
            <Link to='/browse' className='nav-link'>Browse</Link>
          </Nav>
        </Navbar.Collapse>
        {/* Componente per la ricerca dei libri */}
        <SearchBook search={search} handleSearch={handleSearch} />
        {/* Bottone per cambiare il tema */}
        <Button variant='dark' className='me-3' onClick={() => {
          // Cambio del tema al click del bottone
          themeCtx === 'light' ? setThemeCtx('dark') : setThemeCtx('light');
        }}>
          {/* Icona del tema corrente */}
          {themeCtx === 'dark' ? <MoonStarsFill /> : <SunFill />} 
        </Button>
      </Container>
    </Navbar>
  );
}

// Esportazione del componente MyNav
export default MyNav;
