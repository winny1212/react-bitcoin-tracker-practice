import React from 'react'
import currencyData from '../data/currency-data.json'

export default function CurrencySelector(props) {
    const {handleCurrencyChange} = props

    return (
        <div>
            <h2>currency display</h2>
            <select onChange={(event)=>{handleCurrencyChange(event.target.value)}}>
                {currencyData.map(({currency,country},index)=>
                {return <option 
                    key={`${index}-${currency}`}
                    value={currency} 
                    >{country}</option>}
                )}
            </select>
        </div>
    )
}
