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
            }
        };

        this.handleScroll = this.handleScroll.bind(this);
    };

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll() {
        console.log(window.scrollY)
        if (window.scrollY > 1) {
            this.setState({
                style: {
                    visibility: 'visible',
                    position: 'fixed',
                    bottom: '4vh',
                    right: '4vw'
                }
            })
        }
        else if (window.scrollY < 2) {
            this.setState({
                style: {
                    visibility: 'hidden',
                    position: 'fixed',
                    bottom: '4vh',
                    right: '4vw'
                }
            })
        }
    };

    render() {
        return (
            <a style={this.state.style} href='#name'>
                Back To Top
            </a>
        );
    };
};

export default BackToTop;