import React from 'react';
import abtimg from '../images/about.png'
function about(){
    return(
        <div id='about'>
            <div className='about-img'>
                <img src={abtimg} alt='' />
            </div>
            <div className='about-text'>
                <h1>KNOW MORE ABOUT US</h1>
                <p>CONTACT US ANYTIME</p>
                <button>KNOW MORE</button>
            </div>
        </div>
    )
}

export default about;













