import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../footer/Footer'; 
import Navbar from '../Navbar';

function Home(){
    return(
        <>
            
            <HeroSection />
            <Navbar />
        </>
    );
}

export default Home;