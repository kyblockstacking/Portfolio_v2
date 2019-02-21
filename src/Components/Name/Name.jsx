import React, { Component } from 'react';

class Name extends Component {

    state = {
        k: 'hide',
        e: 'hide',
        v: 'hide',
        i: 'hide',
        n: 'hide',
        y: 'hide',
        a: 'hide',
        n2: 'hide',
        g: 'hide',
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ k: 'bounce-in' })
        }, Math.floor(Math.random() * Math.floor(2000)))

        setTimeout(() => {
            this.setState({ e: 'bounce-in' })
        }, Math.floor(Math.random() * Math.floor(2000)))

        setTimeout(() => {
            this.setState({ v: 'bounce-in' })
        }, Math.floor(Math.random() * Math.floor(2000)))

        setTimeout(() => {
            this.setState({ i: 'bounce-in' })
        }, Math.floor(Math.random() * Math.floor(2000)))

        setTimeout(() => {
            this.setState({ n: 'bounce-in' })
        }, Math.floor(Math.random() * Math.floor(2000)))

        setTimeout(() => {
            this.setState({ y: 'bounce-in' })
        }, Math.floor(Math.random() * Math.floor(2000)))

        setTimeout(() => {
            this.setState({ a: 'bounce-in' })
        }, Math.floor(Math.random() * Math.floor(2000)))

        setTimeout(() => {
            this.setState({ n2: 'bounce-in' })
        }, Math.floor(Math.random() * Math.floor(2000)))

        setTimeout(() => {
            this.setState({ g: 'bounce-in' })
        }, Math.floor(Math.random() * Math.floor(2000)))
    }

    render() {

        return (
            <div className='name'>
                <span className={this.state.k}>K</span>
                <span className={this.state.e}>e</span>
                <span className={this.state.v}>v</span>
                <span className={this.state.i}>i</span>
                <span className={this.state.n}>n</span>
                <span>&nbsp;</span>
                <span className={this.state.y}>Y</span>
                <span className={this.state.a}>a</span>
                <span className={this.state.n2}>n</span>
                <span className={this.state.g}>g</span>
            </div>
        );
    };

};

export default Name;