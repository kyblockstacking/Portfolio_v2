import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Jumbotron';

const Hero = () => {
    return (
        <Jumbotron fluid className='hero'>
            <Container>
                <div className='name'>KEVIN YANG</div>
            </Container>
        </Jumbotron>
    );
};

export default Hero;