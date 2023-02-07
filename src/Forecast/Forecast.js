import React, {useState, useEffect} from 'react'
import './Forecast.css'
import axios from 'axios'

function Forecast() {
    //define state to store zip code

    const [zip, setZip] = useState("")

    //https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=eed00703d32ecc859f05db33c3340a73
    //https://api.openweathermap.org/data/2.5/weather?zip=77057&units=imperial&appid=eed00703d32ecc859f05db33c3340a73

  

        const [forecast, setForecast] = useState('')

        const [icon, setIcon] = useState('')

        const getForecast = () => {
            console.log(zip)
            //call api to get weather info
            axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=eed00703d32ecc859f05db33c3340a73`)
           .then(res =>{
                console.log(res.data)
                //store this in state
                setForecast(res.data)
                //store icon in state
                //https://openweathermap.org/img/wn/04d@2x.png
                setIcon(`https://openweathermap.org/img/wn/${res.data?.weather[0].icon}@2x.png`)
    
             })
            
           .catch(err => console.log(err))
        }

        // const [temp, setTemp] = useState('Temperature')

        // const getTemp= () => {
        //     axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eed00703d32ecc859f05db33c3340a73`
        //     )
        //     .then(res =>{
        //         console.log(res.data.main.temp)
        //          setTemp(res.data.main.temp)
        //     })
            
        //     .catch(err => console.log(err))
        // }

    

  return (
    <div className='forecast-container'>
    
        <input type='text' onChange={event => setZip(event.target.value)} placeholder='Enter your zip code' />
        
       <img className='icon' src={icon}/>
        <p>{forecast?.name}</p>
        <p>{forecast?.main?.temp}</p>
        <button onClick={getForecast}>Get Forecast</button>
    </div>
  )
}

export default Forecast
