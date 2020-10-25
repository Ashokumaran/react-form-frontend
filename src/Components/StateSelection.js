import React from 'react'
import csc from 'country-state-city';


function StateSelection(props) {
  const states = csc.getStatesOfCountry(props.states);
    
    return (
        <>
                {states.map((item,index) => {
            return(
                <option key={index} value={item.id}>{item.name}</option>
            )
        })}

        </>
    )
}

export default StateSelection
