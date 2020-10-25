import React from 'react'
import csc from 'country-state-city';


function CitySelection(props) {
  const cities = csc.getCitiesOfState(props.cities);
    return (
        <>
            {cities.map((item,index) => {
            return(
                <option key={index} value={item.id}>{item.name}</option>
            )
        })}

        </>
    )
}

export default CitySelection
