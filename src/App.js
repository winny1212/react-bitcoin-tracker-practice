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
          <CurrencySelector currency={currency} handleCurrencyChange={handleCurrencyChange}/>
          <DataDisplay />
    </div>
  )
}

export default App
