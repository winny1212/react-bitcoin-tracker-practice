import React, {useState,useEffect} from 'react'
import {Line,Chart} from 'react-chartjs-2'

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

    Chart.defaults.defaultFontColor = "#000";
    Chart.defaults.defaultFontSize = 16;

    function formatChartData() {
        // sets up large config object for Line Chart
        return {
          labels: Object.keys(BitcoinData), // ["2021-10-10", "2021-10-11"]
          datasets: [
            {
              label: "Bitcoin",
              fill: false,
              lineTension: 0.2,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: Object.values(BitcoinData) // [500242, 450252, 3252023]
            }
          ]
        }
      }

    return (
        <div>
            <h3>Bitcoin data in {currency}</h3>

            {/* {Object.entries(BitcoinData).map(([data,value])=>{
               return <div>Date:{data}  Value:{value}</ div>
            })} */}

             <div style={{margin:'1rem', maxWidth:"1000px"}}>
                 <Line height={150} data={formatChartData()} />
             </div> 
        </div>
    )
}
