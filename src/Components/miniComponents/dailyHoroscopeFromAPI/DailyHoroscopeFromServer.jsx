import React, {useEffect} from 'react'
import "./dailyHoroscopeFromServer.css"
const DailyHoroscopeFromServer = (props) => {
   
  return (
    <div className='daily-information' style={props.sunsign ? {display:'block'}: {display: 'none'}}>
<h1><span className='title'></span>{props.sunsign}</h1>
<h2><span className='title'>Date: </span>{props.date}</h2>
<h2 style={props.color === "" ? {display: 'none'} : {}}><span className='title'>Color: </span>{props.color}</h2>
<h2 style={props.number===""? {display:'none'}:{}}><span className='title'> Lucky number: </span> {props.number}</h2>
<h2 style={props.time===''? {display:"none"}:{}}><span className='title'> Lucky time: </span> {props.time}</h2>
<h2 style={props.mood===""? {display:'none'}:{}}><span className='title'> Mood: </span> {props.mood}</h2>
<h2 className='horoscope-text'><span className='title'> Horoscope: </span> {props.text}</h2>
    </div>
  )
}
export default DailyHoroscopeFromServer