import React from 'react';

const NameList = (props) => {
    return ( 
        <div>
            {props.fiveNames.map(function(name){
                return <ol>{name}</ol>
            })}
        </div>
     );
}
 
export default NameList;