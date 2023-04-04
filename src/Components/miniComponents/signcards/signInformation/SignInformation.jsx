import React, { useState, useEffect } from "react";
import "./signİnformation.css" 
function ZodiacInfo(props) {
const [zodiacInfo, setZodiacInfo] = useState(null);
const [showInfo, setShowInfo] = useState(true);
useEffect(() => {
const options = {
method: "GET",
headers: {
"X-RapidAPI-Key": "9cf65e8a7bmsh67838c7aa6b14fbp1c3555jsn615bb9eff1e9",
"X-RapidAPI-Host": "zodiac-sign-api1.p.rapidapi.com",
},
};
if (props.selectedZodiac) {
  const zodiac = props.selectedZodiac.charAt(0).toUpperCase() + props.selectedZodiac.slice(1);
  
  fetch(`https://zodiac-sign-api1.p.rapidapi.com/search?sign=${zodiac}`, options)
    .then((response) => response.json())
    .then((data) => setZodiacInfo(data))
    .catch((error) => console.error(error));
}
setShowInfo(true);
}, [props.selectedZodiac]);
const handleToggle = () => {
setShowInfo(!showInfo);
};
return (
<div>
{showInfo && zodiacInfo ? (
  <div className="daily-information container-zodiac zodiac-info-container" id="daily">
  <button onClick={handleToggle}>x</button>
  <h2>{zodiacInfo.name}</h2>
  <p><span className="title">{props.selectedZodiac}</span> </p>
  <p><span className="title">Date:</span> {zodiacInfo.date}</p>
  <p><span className="title">Personality Traits:</span> {zodiacInfo.personality}</p>
</div>
) : (
showInfo
)}
</div>
);
}
export default ZodiacInfo;






