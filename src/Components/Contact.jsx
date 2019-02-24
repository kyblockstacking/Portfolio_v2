import React, { Component } from 'react';

import profilePicture from '../Images/pic.jpg';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            class: 'col'
        };

        this.RenderFooter = this.RenderFooter.bind(this);

    };
    // fades in footer if scrolled to bottom of the page 
    // fades out footer if not at bottom of the page
    RenderFooter() {
        const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        // adjust docHeight to show/unshow footer sooner/later
        if (windowBottom >= docHeight - 250) {
            this.setState({
                class: 'col fade-in'
            });
        }
        else if (windowBottom < docHeight) {
            this.setState({
                class: 'col fade-out'
            });
        }
        console.log('bot' + windowBottom)
        console.log('doc' + docHeight)
    };

    componentDidMount() {
        window.addEventListener('scroll', this.RenderFooter);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.RenderFooter);
    };


    render() {
        return (
            <div className='contact' id='contact'>
                <div className={this.state.class}>
                    <div className='row'>
                        <img src={profilePicture} alt='Smiley face' className='profilePicture' />
                        <div className='description'>
                            <div className='footerName'>Kevin Yang</div>
                            <div><a href='mailto:kevin1992yang@gmail.com' className='contacts'>kevin1992yang@gmail.com</a></div>
                            <div><a href='tel:1-626-539-9092' className='contacts'>626-539-9092</a></div>
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