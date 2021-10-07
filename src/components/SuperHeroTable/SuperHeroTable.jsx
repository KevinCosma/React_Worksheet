import React from 'react';

const SuperHeroTable = (props) => {
    return ( 
        <div>
        {props.heroTable.map(function(superHero){
            return
            <table>
                <tr>
                    <th>heroIdOne</th>
                    <th>heroIdTwo</th>
                    <th>heroIdThree</th>
                </tr>
                <tr>
                    <td>heroNameOne</td>
                    <td>heroNameTwo</td>
                    <td>heroNameThree</td>
                </tr>
                <tr>
                    <td>primaryAbilityOne</td>
                    <td>primaryAbilityTwo</td>
                    <td>primaryAbilityThree</td>
                </tr>
                <tr>
                    <td>secondarAbilityOne</td>
                    <td>secondarAbilityTwo</td>
                    <td>secondaryAbilityThree</td>
                </tr> 
            </table>
        })}
    </div>
     );
}
 
export default SuperHeroTable;