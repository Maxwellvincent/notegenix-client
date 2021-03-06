import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
// import Button from '../Button/Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
        //once clicked, were changing the state of click (false) => (!false(=T)) =T
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
                <nav className="navbar">
                    <div className="navbar-container" >
                        <Link 
                            to="/" 
                            className="navbar-logo" 
                            style={{color: "white"}}
                            onClick={closeMobileMenu}
                        >
                            Notegenix 
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                        </div>
                        <ul className={click ? 'nav-menu active': 'nav-menu'}>
                            <li className='nav-item'>
                                <Link 
                                    to='/' 
                                    className='nav-links' 
                                    onClick={closeMobileMenu}
                                    >
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link 
                                    to='/about' 
                                    className='nav-links' 
                                    onClick={closeMobileMenu}
                                    >
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link 
                                    to='/start' 
                                    className='nav-links' 
                                    onClick={closeMobileMenu}
                                    >
                                    Start Task
                                </Link>
                            </li>
                        </ul>
                        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                    </div>
                </nav>
            
        </div>
    )
}

export default Navbar;