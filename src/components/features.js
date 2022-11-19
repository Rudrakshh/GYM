import React from 'react'
import Featurebox from './featurbox';
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'

function features(){
    return(
        <div id="features">
            <h1>FEATURES</h1>
            <div className='a-container'>
                <Featurebox image={fimage1} text="WEIGHT LIFTING"/>
                <Featurebox image={fimage2} text="SPECIFIC MUSCLE"/>
                <Featurebox image={fimage3} text="FLEX"/>
                <Featurebox image={fimage4} text="CARDIO"/>
            </div>
        </div>
    )
}

export default features;