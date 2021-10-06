import React from 'react';

const NameList = (props) => {
    return ( 
        <ol>
            {props.fiveNames.map(function(name){
                return <ol>{name}</ol>
            })}
        </ol>
     );
}
 
export default NameList;