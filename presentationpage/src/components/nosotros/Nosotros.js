import React from 'react';
import Jumbotron from './jumbotron/Jumbotron'; 
import Detalles from './detalles/Detalles'; 
import Realnav from '../realnav/Realnav';
import Footer from '../footer/Footer';
 
 
class Nosotros extends React.Component {
 
 render() {
 
 return(
 
 <>
 
 <Realnav />
 <main role="main" className="flex-shrink-0 mt-5">
         
 <Jumbotron />  
 <Detalles />  
 
    </main>
 
    <Footer />
 
    </>
 
 )
 
 }
 
}

export default Nosotros;