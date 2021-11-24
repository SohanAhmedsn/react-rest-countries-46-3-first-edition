import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data));
    
  }, [])
    return (
        <div>
            <h2>This is Countries</h2>
            <h1>Total : {countries.length}</h1>
            {
                countries.map(country => <Country
                  country={country}

                ></Country>)
            }
        </div>
    );
};

export default Countries;