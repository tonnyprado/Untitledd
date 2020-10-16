import React from 'react';
import './Realnav.css';

function Realnav() {
    return (
        <>
            <div class="container">
                <nav>
                    <input type="checkbox" id="nav" class="hidden"/>
                    <label for="nav" class="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                    </label>
                    <div class="logo">
                        <a href="#">BRAND</a>
                    </div>
                    <div class="nav-wrapper">
                        <ul>
                            <li><a href="#">SERIES</a></li>
                            <li><a href="#">COLECCIÓN</a></li>
                            <li><a href="#">NOSOTROS</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">CONTACTO</a></li>
                            <li><a href="#">CART</a></li>
                            <li><a href="#">LOGIN</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Realnav
