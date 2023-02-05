import React from 'react';

function Searchbox({searchfield, searchChange }){
    return(
        <div>
            <input className ='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={searchChange}></input>
        </div>
    )
}

export default Searchbox;