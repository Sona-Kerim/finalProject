import React, { useState, useEffect } from 'react';
import "./MatchSign.css"
const MatchSign = () => {
  const [zodiac, setZodiac] = useState('');
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const zodiacs = [
    { name: 'Aries', trait: 'confident and ambitious' },
    { name: 'Taurus', trait: 'stubborn and persistent' },
    { name: 'Gemini', trait: 'curious and adaptable' },
    { name: 'Cancer', trait: 'emotional and intuitive' },
    { name: 'Leo', trait: 'generous and confident' },
    { name: 'Virgo', trait: 'practical and analytical' },
    { name: 'Libra', trait: 'diplomatic and fair-minded' },
    { name: 'Scorpio', trait: 'intense and passionate' },
    { name: 'Sagittarius', trait: 'adventurous and optimistic' },
    { name: 'Capricorn', trait: 'responsible and disciplined' },
    { name: 'Aquarius', trait: 'unconventional and independent' },
    { name: 'Pisces', trait: 'compassionate and artistic' }
  ];
  const [question, setQuestion] = useState({
    zodiac: '',
    trait: ''
  });
  useEffect(() => {
    generateQuestion();
  }, []);
  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * zodiacs.length);
    const randomZodiac = zodiacs[randomIndex];
    setQuestion({
      zodiac: randomZodiac.name,
      trait: randomZodiac.trait
    });
    setAnswer('');
    setResult('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (zodiac === question.zodiac) {
      setResult('Correct!');
    
    } else {
      setResult('Incorrect. The correct answer is ' + question.zodiac + '.');
    }
  };
  return (
    <div className="quiz-container">
      <h2 className='zodiac-quiz'>Zodiac Quiz</h2>
      <p >Guess which zodiac sign is associated with the following trait:</p>
      <h3 className='question'>{question.trait}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Your Guess:
          <select className='select-quiz' value={zodiac} onChange={(e) => setZodiac(e.target.value)}>
            <option value="">Please choose an option</option>
            {zodiacs.map(zodiac => (
              <option key={zodiac.name} value={zodiac.name}>{zodiac.name}</option>
            ))}
          </select>
        </label>
        <button className='btn' type="submit">Check Answer</button>
      </form>
      <p className={`result-message ${result === 'Correct!' ? "correct" : ""}`}>{result}</p>
      <button  className="next-question-button"onClick={generateQuestion}>Next Question</button>
    </div>
  );
};


export default MatchSign