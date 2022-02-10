import React from 'react';

const About = () =>{
    return(
        <section className='s2'>
            <div className='main-container'>
                <div className='about-wrapper'>
                    <div className='about-me'>
                        <h4>More about me</h4>

                        <p>I'm a progmmer from Argentina, currently studing Comupter science at the University of Buenos Aires. 
                        </p>

                        <p>In my free time I keep learning new things because I like to create simple applications and learn some new technology.</p>

                        <hr/>

                        <h4>EXPERTISE</h4>

                        <p>Fullstack developer with primary focus on Java, Flutter and React: 
                        <a target={'_blank'} rel="noopener noreferrer" href={require('./cv-santiago-chantada.pdf')}> Download Resume</a></p>
                        
                        <div id='skills'>
                            <ul>
                                <li>Javascript</li>
                                <li>Java</li>
                                <li>Play</li>
                                <li>React</li>
                            </ul>

                            <ul>
                                <li>HTML/CSS</li>
                                <li>Flutter</li>
                                <li>SQL</li>
                                <li>Docker</li>
                            </ul>
                        </div>

                    </div>

                    
                    <div className='social-links'>
                        <img id='social_img' rel="noopener noreferrer" src={require('./github-about.png')}></img>
                        <h3>Find me on Github</h3>

                        <a target={'_blank'} rel="noopener noreferrer" href='https://github.com/SantiNCh'>Github: @SantiNCh</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;