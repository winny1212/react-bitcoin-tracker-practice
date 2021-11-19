import React from 'react'
import currencyData from '../data/currency-data.json'

export default function CurrencySelector(props) {
    const {handleCurrencyChange} = props

    return (
        <div style={{'textAlign': 'center'}}>
            <h2 style={{'lineHeight': '22px', 'paddingLeft': '6px'}}>currency display</h2>
            <select style={{'marginLeft': '20px','padding': '8px', 'borderRadius': '8px','border': '2px solid #4bc0c0','outline': 'none'}} onChange={(event)=>{handleCurrencyChange(event.target.value)}}>
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
