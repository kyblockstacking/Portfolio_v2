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

        this.BackToTop = this.BackToTop.bind(this);
    };

    componentWillMount() {
        window.addEventListener('scroll', this.BackToTop);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.BackToTop);
    };

    BackToTop() {
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

    CloseBackToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        this.setState({
            style: {
                visibility: 'hidden',
                position: 'fixed',
                bottom: '4vh',
                right: '4vw'
            }
        });
    };

    render() {
        return (
            <span style={this.state.style} onClick={this.CloseBackToTop} className={this.state.className} id='backToTopButton'>
                Back To Top
            </span>
        );
    };
};

export default BackToTop;