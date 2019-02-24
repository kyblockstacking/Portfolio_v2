import React, { Component } from 'react';

class BackToTop extends Component {
    constructor(props) {
        super()

        this.state = {
            style: {
                visibility: 'hidden',
                position: 'fixed',
                bottom: '4vh',
                right: '4vw'
            },
            className: ''
        };

        this.RenderBackToTop = this.RenderBackToTop.bind(this);
    };

    componentWillMount() {
        window.addEventListener('scroll', this.RenderBackToTop);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.RenderBackToTop);
    };
    // slides in backToTop button if not at top of page
    // slides out backToTop button if at top of page
    RenderBackToTop() {
        if (window.scrollY > 100) {
            this.setState({
                style: {
                    visibility: 'visible',
                    position: 'fixed',
                    bottom: '4vh',
                    right: '4vw',
                    padding: '10px',
                    backgroundColor: '#D2E1FF',
                    textDecoration: 'none',
                    color: '#354B72',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontFamily: 'Karla',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
                },
                className: 'slide-in'
            });
        }
        else {
            this.setState({
                className: 'slide-out'
            });
        }
    };

    BackToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    render() {
        return (
            <span style={this.state.style} onClick={this.BackToTop} className={this.state.className} id='backToTopButton'>
                Back To Top
            </span>
        );
    };
};

export default BackToTop;