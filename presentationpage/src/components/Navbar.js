import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    //const [button, setButton] = useState(true);
    /*const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);*/

    return (
        <>
            <br/><br/><nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        UNTITLED
                    </Link>
                    <div className='menu-icon'>
                        
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <div className="buttonn">
                        <Button buttonStyle='btn--outline'>Inicia sesión</Button>
                        </div>
                    
                </div>
                
            </nav>
            <br/><br/>
            <ul>
            <br/><li><Link to='/' className='nav-links'>SERIES</Link></li><br/>
                <li><Link to='/coleccion/Coleccion' className='nav-links'>COLECCIÓN</Link></li><br/>
                <li><Link to='/nosotros/Nosotros' className='nav-links'>NOSOTROS</Link></li><br/>
                <li><Link to='/' className='nav-links'>BLOG</Link></li><br/>
                <li><Link to='/faq/Faq' className='nav-links'>CONTACTO</Link></li><br/>
            </ul>

        </>
    )
}

export default Navbar
