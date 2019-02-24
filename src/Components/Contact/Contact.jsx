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
                            <div><i className='fas fa-user-tie'>&nbsp;</i>Kevin Yang</div>
                            <div><i className='far fa-envelope'>&nbsp;</i>kevin1992yang@gmail.com</div>
                            <div><i className='fas fa-mobile-alt'>&nbsp;</i>123-123-1234</div>
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