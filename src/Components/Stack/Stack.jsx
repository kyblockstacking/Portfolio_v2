import React, { Component } from 'react';

class Stack extends Component {

    state = {};

    render() {
        return (
            <div className='stackContainer' id='stack'>

                <div className='row1'>
                    <i className='fab fa-react icons'><span className='iconNames'>React</span></i>
                    <i className='fab fa-js-square icons'><span className='iconNames'>JavaScript</span></i>
                    <i className='fas fa-rss icons'><span className='iconNames'>JQuery</span></i>
                    <i className='fas fa-retweet icons'><span className='iconNames'>AJAX</span></i>
                    <i className='fab fa-connectdevelop icons'><span className='iconNames'>ES Lint</span></i>
                    <i className='fab fa-html5 icons'><span className='iconNames'>HTML</span></i>
                    <i className='fab fa-css3 icons'><span className='iconNames'>CSS</span></i>
                </div>
                <div className='row2'>
                    <i className='fas fa-box-open icons'><span className='iconNames'>FlexBox</span></i>
                    <i className='fab fa-sass icons'><span className='iconNames'>SASS</span></i>
                    <i className='fas fa-bold icons'><span className='iconNames'>Bootstrap</span></i>
                    <i className='fab fa-node icons'><span className='iconNames'>Node</span></i>
                    <i className='fas fa-server icons'><span className='iconNames'>Express</span></i>
                    <i className='fab fa-yarn icons'><span className='iconNames'>Yarn</span></i>
                </div>
                <div className='row3'>
                    <i className='fab fa-git icons'><span className='iconNames'>Git</span></i>
                    <i className='fab fa-github icons'><span className='iconNames'>GitHub</span></i>
                    <i className='fas fa-fish icons'><span className='iconNames'>MySQL</span></i>
                    <i className='fab fa-envira icons'><span className='iconNames'>MongoDB</span></i>
                    <i className='fab fa-korvue icons'><span className='iconNames'>Heroku</span></i>
                    <i className='fas fa-cogs icons'><span className='iconNames'>APIs</span></i>
                    <i className='fas fa-code-branch icons'><span className='iconNames'>RegEx</span></i>
                </div>
                <div className='row4'>
                    <i className='fab fa-npm icons'><span className='iconNames'>Node Package Manager</span></i>
                    <i className='icons babelIcon'>Babel<span className='iconNames babelName'>Babel</span></i>
                    <i className='fab fa-aws icons'><span className='iconNames'>Amazon Web Services</span></i>
                </div>

            </div>
        );
    };
};

export default Stack;