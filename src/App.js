import React, {useState} from 'react'
import CurrencySelector from './components/CurrencySelector'
import DataDisplay from './components/DataDisplay'

const spanStyle={
  transform: 'translateX(90px)',
  position: 'relative',
  top: '-14px',
  fontFamily: 'monospace',
  fontSize: '16px',
  color: 'rgb(255 255 255 / 70%)',
  display: 'block',
  textAlign: 'center'
}

const App = () => {
  const [currency, setCurrency] = useState('AUD')

  function handleCurrencyChange(newCurrency){
        setCurrency(newCurrency);
  }

  return (
    <div style={{"margin": '0 auto', 'maxWidth': '1000px'}}>
          <h1 style={{ textAlign: 'center', 'lineHeight': '30px', 'paddingLeft': '10px'}}>Bitcoin Index</h1>
          <span style={spanStyle}>Powered by <a style={{color: '#4bc0c0'}} href='https://www.coindesk.com/price/bitcoin' target="_blank" rel="noreferrer">CoinDesk</a></span>
          <CurrencySelector currency={currency} handleCurrencyChange={handleCurrencyChange}/>
          <DataDisplay currency={currency}/>
    </div>
  )
}

export default App
