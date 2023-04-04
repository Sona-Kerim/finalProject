import React from 'react'
import { useEffect,useState } from "react";
import "./QuoteOfTheday.css"

 const QuoteOfTheday = () => {
    const [quote,setQuote]=useState("")
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9cf65e8a7bmsh67838c7aa6b14fbp1c3555jsn615bb9eff1e9',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            }
        };
        fetch('https://horoscope-astrology.p.rapidapi.com/dailyphrase', options)
            .then(res => res.json())
            .then(data=> {
                console.log(data);
                setQuote(data.daily)
            })
      }, []);
  return (
    <div className='quote'>
        <div></div>
        <h3> <span> Daily Phrase: </span><br/> {quote}</h3>
    </div>
  )
}
export default QuoteOfTheday