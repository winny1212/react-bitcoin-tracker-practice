import React, {useState,useEffect} from 'react'

export default function DataDisplay(props) {
    const {currency} = props;
    const [BitcoinData,setBitcoinData] = useState({});

    async function getCurrencyData(currency){
        const response = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`)
        const data = await response.json()
        setBitcoinData(data.bpi)
    }

    useEffect(()=>{

        getCurrencyData(currency)
        // fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`)
        //      .then(response => response.json())
        //      .then(data => setBitcoinData(data.bpi))
        //      .catch(error=>console.log(error))
    },[currency]);


    return (
        <div>
            <h3>Bitcoin data in {currency}</h3>
            {Object.entries(BitcoinData).map(([data,value])=>{
               return <div>Date:{data}  Value:{value}</ div>
            })}
        </div>
    )
}
