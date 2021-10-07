import React from 'react';

const SuperHeroTable = (props) => {
    return ( 
        <div>
        {props.heroTable.map(function(superHero){
            return (
            <table>
                <tr><th>Hero ID</th><th>Hero Name</th><th>Primary Ability</th><th>Secondary Ability</th></tr>
                <tr><td>{superHero.superheroId}</td>{superHero.name}<td>{superHero.primaryAbility}</td><td>{superHero.secondarAbility}</td></tr>
            </table>
        )})}
        </div>
     );
}
 
export default SuperHeroTable;