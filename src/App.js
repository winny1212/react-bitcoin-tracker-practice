import React, {useState} from 'react'
import CurrencySelector from './components/CurrencySelector'
import DataDisplay from './components/DataDisplay'

const App = () => {
  const [currency, setCurrency] = useState('AUD')

  function handleCurrencyChange(newCurrency){
        setCurrency(newCurrency);
  }

  return (
    <div >
          <h1>Bitcoin Index</h1>
          <span>Powered by <a href='https://www.coindesk.com/price/bitcoin' target="_blank" rel="noreferrer">CoinDesk</a></span>
          <CurrencySelector currency={currency} handleCurrencyChange={handleCurrencyChange}/>
          <DataDisplay currency={currency}/>
    </div>
  )
}

export default App
