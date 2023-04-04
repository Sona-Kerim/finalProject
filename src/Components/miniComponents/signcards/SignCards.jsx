import React , {useEffect,useState} from 'react'
import "./SignCards.css"
import ZodiacInfo from './signInformation/SignInformation'

const SignCards = () => {
    let signs = ["aries","taurus","gemini","cancer","leo","virgo", "libra","scorpio","sagittarius", "capricorn", "aquarius","pisces"];
    const [zodiac, setZodiac] = useState("");
    
    useEffect (() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e80add7324mshd1ade5d2c3a4fc4p12bfc4jsnab10067599ac',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            }
        };
        
        const promises = signs.map(sign => {
            return fetch(`https://horoscope-astrology.p.rapidapi.com/sign?s=${sign}`, options)
                .then(response => response.json())
        });

        Promise.all(promises)
            .then(data => {
                const sortedData = data.sort((a, b) => signs.indexOf(a.name) - signs.indexOf(b.name))
                console.log(data);
                data.map((result,index)=>{
                    let div = document.createElement("div")
                    let h5 = document.createElement("h5")
                    let dataRange = document.createElement("h5")
                    let element = document.createElement("h5")
                    let planet = document.createElement("h5")
                    let divPhoto = document.createElement("div")
                    let divCards = document.querySelector(".div-cards")
                    
                    div.append(divPhoto)
                    div.append(h5)
                    div.append(dataRange)
                    div.append(element)
                    div.append(planet)
                    
                    h5.innerHTML = `<span>Name:</span> ${result.name}`
                    dataRange.innerHTML= `<span>Date Range:</span> ${result.date_range}`
                    element.innerHTML= `<span>Element:</span> ${result.element}`
                    planet.innerHTML = `<span> Planet:</span>${result.ruling_planet}`
                    
                    div.classList.add(`card`)
                    divPhoto.classList.add(`${result.name}`)
                    divPhoto.classList.add(`signPhotos`)
                    divCards.append(div)

                   
                    div.addEventListener('click', () => {
                        setZodiac(result.name);
                       
                    });
                });
            })
            .catch(error => console.log(error));
            
    }, []);
    useEffect(() => {
      console.log(zodiac);
    }, [zodiac]);    
    return (
        <>
            <div className="burc">
                <h4 className= "signs">SIGNS</h4> 
            </div>
            <div className= "div-cards"></div>
            <ZodiacInfo selectedZodiac={zodiac} />

        </>
    );
};
export default SignCards;
