import React from 'react';
import Realnav from '../realnav/Realnav'; 
import './Csoleccion.css';
import Footer from '../footer/Footer';

function coleccion() {
    return (
        <>
            <div className="cuerpo">
                <Realnav />
                <div class="grid-container">
                    <aside>Shopping Categories</aside>
                    <main class="main">

                        <div class="box">
                            <div class="slide-img">
                                <img src={'./images/1.jpg'} alt="1" />
                            </div>
                            <div class="detail-box"></div>
                        </div>
                        
                    </main>
                </div>
                <footer class="footer"><Footer /></footer>
            </div>
        </>
    )
}

export default coleccion

