import React from 'react';

import Realnav from '../realnav/Realnav'; 

import Formulario from './formulario/Formulario';

import Footer from '../footer/Footer';


 
 
class Contacto extends React.Component {
 
 render() {
 
 return(
 
 <>

 <Realnav />
 
 <main role="main" className="flex-shrink-0 mt-5">
 
 <div className="container">
 
 <h1 className="mb-5">Contacto</h1>
 
             <div className="row">
 
             <div className="col-md-6">
         
 <Formulario /> 
 
 </div>
 
 </div>
 </div> 
 
   		</main>
 
    <Footer />
 
    </>
 
 )
 
 }
 
}
 
export default Contacto;