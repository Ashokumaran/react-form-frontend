import React from 'react'
import csc from 'country-state-city';


function CountriesSelection() {
 
    let countries = csc.getAllCountries();
      return (
          
        <>
        {countries.map((item,index) => {
            return(
                <option key={index} value={item.id}>{item.name}</option>
            )
        })}
        </>
    )
}

export default CountriesSelection


// useEffect(() => {
//   const fetch = require('node-fetch');

// (async () => {
// const response = await fetch(
//   'https://parseapi.back4app.com/classes/Country?&limit=100',
//   {
//     headers: {
//       'X-Parse-Application-Id': 'mxsebv4KoWIGkRntXwyzg6c6DhKWQuit8Ry9sHja', 
//       'X-Parse-Master-Key': 'TpO0j3lG2PmEVMXlKYQACoOXKQrL3lwM0HwR9dbH', 
//     }
//   }
// );
// const data = await response.json(); 
// const array=data.results;
// setCountries((array))
// })(); 
// }, [])

