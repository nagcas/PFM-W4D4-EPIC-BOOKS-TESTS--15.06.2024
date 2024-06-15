// Importazione del file CSS per lo stile
import '../style/MyFooter.css';

// Importazione dei hook di React e dei componenti necessari da React-Bootstrap
import { useContext } from 'react';

import { Link } from 'react-router-dom';

// Importazione del contesto per il tema
import { ThemeContext } from '../modules/Contexts';


// Definizione del componente MyFooter
function MyFooter() {

  // Uso del contesto per il tema
  const [themeCtx] = useContext(ThemeContext);

  // Render del componente
  return (
    <footer className={'bg-' + themeCtx + ' py-3 container-fluid'}>
      <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
        <li className='nav-item'>
          <Link to='/' className={themeCtx === 'dark' ? 'text-white text-center nav-link px-2 item-link' : 'text-dark text-center nav-link px-2 item-link'}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className={themeCtx === 'dark' ? 'text-white text-center nav-link px-2 item-link' : 'text-dark text-center nav-link px-2 item-link'}>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/browse' className={themeCtx === 'dark' ? 'text-white text-center nav-link px-2 item-link' : 'text-dark text-center nav-link px-2 item-link'}>
            Browse
          </Link>
        </li>
      </ul>
      <p className={themeCtx === 'dark' ? 'text-white text-center' : 'text-dark text-center'}>© 2024 Epic-Books, Inc</p>
    </footer>
  );
}

// Esportazione del componente MyFooter
export default MyFooter;
