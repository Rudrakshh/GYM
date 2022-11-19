import React from 'react';

function contact(){
    return(
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder="FULL NAME" required /> 
                <input type="EMAIL" placeholder="EMAIL" required /> 
                <textarea placeholder='TYPE HERE.......' required />
                <input type="submit" value="send" />
"
            </form>
        </div>
    )
}

export default contact;













