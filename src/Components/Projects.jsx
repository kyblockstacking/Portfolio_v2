import React, { Component } from 'react';

class Projects extends Component {

    componentWillMount() {
        window.onload = function () {
            const panels = document.querySelectorAll('.panel');
            function toggleOpen() {
                this.classList.toggle('open');
            }
            function toggleActive(event) {
                if (event.propertyName.includes('flex')) {
                    this.classList.toggle('open-active');
                }
            }
            panels.forEach(panel => panel.addEventListener('click', toggleOpen));
            panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
        };
    };

    render() {
        return (
            <div className='panels slide-in-left' id='projects'>
                <div className='panel panel1'>
                    <a className='githubProject' href='https://github.com/kyblockstacking/ThreaderZZZ' rel='noopener noreferrer' target='_blank'>GitHub&nbsp;Repository&nbsp;<i className='fas fa-external-link-alt'></i></a>
                    <p><sup>Threader<sup>&nbsp;Z<sup>&nbsp;Z<sup>&nbsp;Z</sup></sup></sup></sup></p>
                    <p>A platform for programming discussions, questions and real-time mentorship.</p>
                </div>
                <div className='panel panel2'>
                    <a className='githubProject' href='https://github.com/kyblockstacking/Pickee' rel='noopener noreferrer' target='_blank'>GitHub&nbsp;Repository&nbsp;<i className='fas fa-external-link-alt'></i></a>
                    <p>Pickee</p>
                    <p>A web application that builds a date plan based on the user's budget.</p>
                </div>
                <div className='panel panel3'>
                    <a className='githubProject' href='https://github.com/kyblockstacking/iLoveAvocados' rel='noopener noreferrer' target='_blank'>GitHub&nbsp;Repository&nbsp;<i className='fas fa-external-link-alt'></i></a>
                    <p>iLoveAvocados</p>
                    <p>A Website dedicated to avocados!</p>
                </div>
                <div className='panel panel4'>
                    <a className='githubProject' href='https://github.com/kyblockstacking/Hex_Color_Clock' rel='noopener noreferrer' target='_blank'>GitHub&nbsp;Repository&nbsp;<i className='fas fa-external-link-alt'></i></a>
                    <p>Hex Clock</p>
                    <p>Hex code numbers depicts the current time.</p>
                </div>
            </div>
        );
    };
};

export default Projects;