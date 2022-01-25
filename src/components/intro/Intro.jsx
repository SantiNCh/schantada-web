import React from 'react';


const Intro = () => {
    let file = document.getElementById('theme-style');
    let theme = localStorage.getItem('theme');
    
    if(theme == null){
        setTheme('light', file);
    }else{
        setTheme(theme, file);
    }
    const changeColor = (e) =>{
        console.log('Entro')
        let themeDots = document.getElementsByClassName('theme-dot');
        for (var i=0; themeDots.length > i; i++){
            themeDots[i].addEventListener('click', function(){
                let mode = this.dataset.mode;
                setTheme(mode, file);
           });
        }

        
    }

    function setTheme(mode, file){
        if(mode === 'light'){
            file.href = 'default.css';
        }

        if(mode === 'blue'){
            file.href = 'blue.css';
        }

        if(mode === 'green'){
            file.href = 'green.css';
        }

        if(mode === 'purple'){
            file.href = 'purple.css';
        }
        localStorage.setItem('theme', mode)
    }
  return (
        <section className="s1">
            <div className='main-container'>
                <div className='greeting-wrapper'>
                    <h1>Hi, I'm Santiago Chantada</h1>
                </div>

                <div className='intro-wrapper'>
                    <div className='nav-wrapper'>
                        <div className='dots-wrapper'>
                            <div id='dot-1' className='browser-dot'></div>
                            <div id='dot-2' className='browser-dot'></div>
                            <div id='dot-3' className='browser-dot'></div>
                        </div>

                        <ul id='navigation'>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>

                    <div className='left-column'>
                        <img id='profile_pic' src={require('../../img/profile.jfif')} />
                        <h5 style={{textAlign: 'center', lineHeight: 0}}>Personalize Theme</h5>

                        <div id="theme-options-wrapper">
                            <div data-mode="light" onClick={(e) => changeColor(e)} id='light-mode' className='theme-dot'></div>
                            <div data-mode="blue" onClick={(e) => changeColor(e)} id='blue-mode' className='theme-dot'></div>
                            <div data-mode="green" onClick={(e) => changeColor(e)} id='green-mode' className='theme-dot'></div>
                            <div data-mode="purple" onClick={(e) => changeColor(e)} id='purple-mode' className='theme-dot'></div>
                        </div>

                        <p id='settings-note'>*Theme settings will be saved for <br />your next visit</p>
                    </div>

                    <div className='right-column'>
                        <div id='preview-shadow'>
                            <div id='preview'>
                                <div id='corner-tl' className='corner'></div>
                                <div id='corner-tr' className='corner'></div>
                                <h3>What I Do</h3>
                                <p>I'm studing Computer science and working as a Java developer</p>
                                <div id='corner-br' className='corner'></div>
                                <div id='corner-bl' className='corner'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};

export default Intro;

