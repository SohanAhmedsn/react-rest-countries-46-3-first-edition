import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flag, region,capital,timezones,population,area,numericCode} = props.country;
    return (
        <div className="country">
            <h2>This is Country</h2>
            <h4>Name: {name}</h4>
            <img src={flag} alt="" />
            <h4>capital: {capital}</h4>
            <h4>timezones: {timezones}</h4>
            <h4>region: {region}</h4>
            <h4>population: {population}</h4>
            <h4>area: {area}</h4>
            <h4>numericCode: {numericCode}</h4>

        </div>
    );
};

export default Country;