import {React,useState,useEffect} from 'react'
import '../CSS/Weather.css'

export default function Weather() {
  const [weatherData, setWeatherData]=useState(null);
  const [city,setCity]=useState('Pokhara')


  const changeCity=()=>{
    const enteredCity=document.getElementById('city').value;
    setCity(enteredCity);
  }
useEffect(()=>{
  fetchWeather()
},[city]);
  

  const fetchWeather=()=>{
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},NP&units=metric&appid=032bac1339353eb5decf1e3fc17d4812`).then(
        response=>{if(!response.ok){
            console.log("error");
        }
        else{
    return response.json();
        }
    }).then(data=>{
        console.log(data)
        setWeatherData(data);
        }
    ).catch(err=>{
        console.log(err)
    });
  }
  return (
    <div>
     {weatherData && (
      <div className="container">
      <input className='city mb-4' type="text" placeholder="City"name="CIty" id="city" />
      <button className="btn btn-danger mx-2"type="button" onClick={changeCity}>View</button>
        <div className="card">
        <div className="row col-md-12">

        <div className="row1 col-md-6">
        <div className="container-card">
        <h1>
        {weatherData.name}
            </h1>
            <h2> {weatherData.main.temp}</h2>
            <p>Feels {weatherData.main.feels_like}</p>
            <h5>Wind Speed: {weatherData.wind.speed} miles.</h5>
            {/* <h5>Visibility: {weatherData.wind.speed} miles.</h5> */}
            <br />
            <h4>{weatherData.weather[0].description}</h4>


        </div>
        </div>
        <div className="row2 col-md-6">
            <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="" srcset="" />
        </div>

        </div>
           
        </div>
      </div>
          
          )}
      
    </div>
  )
}
