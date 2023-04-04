import React, { useState, useEffect} from 'react';
import "./ChoosSign.css"
import ResultChoosesSign  from '../ResultChoosesSign/ResultChoosesSign';
const ChooseSign = () => {
  const signs = ["aries","taurus","gemini","cancer","leo","virgo", "libra","scorpio","sagittarius", "capricorn", "aquarius","pisces"];
  const [selectedSigns, setSelectedSigns] = useState(["",""]);
  const [showResults, setShowResults] = useState(false);
  const [header, setHeader] = useState("")
  const [text, setText] = useState("")
  const [header2, setHeader2] = useState("")
  const [text2, setText2] = useState("")
  const [header3, setHeader3] = useState("")
  const [text3, setText3] = useState("")
  const [header4, setHeader4] = useState("")
  const [text4, setText4] = useState("")
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9cf65e8a7bmsh67838c7aa6b14fbp1c3555jsn615bb9eff1e9',
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
      }
    };
  
    fetch(`https://horoscope-astrology.p.rapidapi.com/affinity?sign1=${selectedSigns[0]}&sign2=${selectedSigns[1]}`, options)
      .then(response => response.json())
      .then(data => {
        setHeader(data[0].header)
        setText(data[0].text)
        setHeader2(data[1].header)
        setText2(data[1].text)
        setHeader3(data[2].header)
        setText3(data[2].text)
        setHeader4(data[3].header)
        setText4(data[3].text)
      console.log(data);
      })
      .catch(error => console.error(error));
  }, [showResults]);

  useEffect(() => {
    console.log(header);
    console.log(text);
  }, [header]);

  const handleClick = (sign, container) => {
    const newSelectedSigns = [...selectedSigns];
    newSelectedSigns[container] = sign;
    setSelectedSigns(newSelectedSigns);
  }

  const handleReset = () => {
    setHeader("")
    setText("")
    setHeader2("")
    setText2("")
    setHeader3("")
    setText3("")
    setHeader4("")
    setText4("")
    setSelectedSigns(["", ""]);
    setShowResults(false);
  }
  const HandleShowResults = () => {
    
    setShowResults(true);
  }

  return (
    <>
    <div className='chooseSign-container'>
      <div className='container-one'> 
        <h4 className='choose-sign-word'>
          Choose Your Sign
        </h4>
        {signs.map((sign, index) => (
          <button 
            className={`sign-button ${selectedSigns[0] === sign ? 'selected' : ''}`} 
            key={index}
            disabled={selectedSigns[0] !== '' && selectedSigns[0] !== sign}
            onClick={() => handleClick(sign, 0)}
          >
            {sign}
          </button>
        ))}
      </div>
      <div className='container-two'>
        <h4 className='choose-sign-word'>
          Choose Your Partner's Sign
        </h4>
        {signs.map((sign, index) => (
          <button 
            className={`sign-button ${selectedSigns[1] === sign ? 'selected' : ''}`} 
            key={index}
            disabled={selectedSigns[1] !== '' && selectedSigns[1] !== sign}
            onClick={() => handleClick(sign, 1)}
          >
            {sign}
          </button>
        ))}
      </div>
      <div className='button-container'>
        <button onClick={handleReset}>Reset</button>
        <button onClick={HandleShowResults}>Show Results</button>
      </div>
      {showResults && (
        <div className='result-container'>
          <p className='result-text'> <span className='sign-name'>Your Sign:<br/></span> {selectedSigns[0]}</p>
          <p className='result-text'><span className='sign-name'>Partner's Sign:<br/></span>{selectedSigns[1]}</p>
        </div>
      )}
    </div>
      <ResultChoosesSign header = {header} text ={text} header2={header2} text2 = {text2} text3={text3} header3={header3} text4={text4} header4={header4}/>
      </>
  );
}

export default ChooseSign;




