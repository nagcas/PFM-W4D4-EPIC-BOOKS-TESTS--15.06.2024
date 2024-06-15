// Importazione del file CSS per lo stile
import '../style/Welcome.css';
// Importa il logo book
import Logo from '../img/logo_book.png';
// Importa hook di React
import { useContext } from 'react'; 
// Importa il componente Alert da React Bootstrap
import { Container, Alert } from 'react-bootstrap'; 
// Importa il contesto del tema
import { ThemeContext } from '../modules/Contexts'; 

function Welcome() {
  // Utilizza il contesto del tema per cambiare lo sfondo dark o ligth quando richiesto
  const [themeCtx, setThemeCtx] = useContext(ThemeContext); 
  
  return (
    <Container>
      {/* Messaggio di benvenuto con un Alert che cambia colore in base al tema */}
      <Alert variant={themeCtx === 'dark' ? 'dark' : ''} className='mt-4 text-center color-alert'>
        <img src={Logo} alt='Logo Book' />
        <h1>Welcome EPIC Books</h1>
        <p>Dive into the World of Endless Stories</p>
      </Alert>
    </Container>
  );
}

// Esportazione del componente Welcome
export default Welcome;
