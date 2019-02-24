import React, { Component } from 'react';

import profilePicture from '../../Images/pic.jpg'

class Contact extends Component {
    render() {
        return (
            <div className='contact'>

                <div className='col'>
                    <div className='row'>
                        <img src={profilePicture} alt='Smiley face' className='profilePicture' />
                        <div className='description'>
                            <div className='footerName'>Kevin Yang</div>
                            <div><a href='mailto:kevin1992yang@gmail.com' className='contacts'>kevin1992yang@gmail.com</a></div>
                            <div><a href='tel:626-539-9092' className='contacts'>626-539-9092</a></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='links'><i className='fab fa-github-alt'></i></div>
                        <div className='links'><i className='fab fa-linkedin-in'></i></div>
                        <div className='links'><i className='fab fa-reddit-alien'></i></div>
                    </div>
                </div>
            </div>


        );
    };
};

export default Contact;