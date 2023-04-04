import React, { useState,useEffect } from 'react';
import DailyHoroscopeFromServer from '../dailyHoroscopeFromAPI/DailyHoroscopeFromServer';
import "./selectDailyHoroscope.css";
const SelectDailyHoroscope = () => {
  const [horoscopee, setHoroscopee] = useState("")
  const [month, setMonth] = useState("")
  const [selectedSign, setSelectedSign] = useState('aries');
  const [selectedDate, setSelectedDate] = useState("");
  const [sunsign, setSunsign]  = useState("")
  const [date, setDate ] = useState("")
  const [color, setColor ] = useState("")
  const [number, setNumber] = useState("")
  const [time, setTime] = useState("")
  const [mood, setMood] = useState("")
  const [text, setText] = useState("")
  const fetchHoroscope = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9cf65e8a7bmsh67838c7aa6b14fbp1c3555jsn615bb9eff1e9',
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
      }
    };
    fetch(`https://horoscope-astrology.p.rapidapi.com/horoscope?day=month&sunsign=${selectedSign}`, options)
      .then(response => response.json())
      .then(resp=>{  setMonth(resp.month);
                      setHoroscopee(resp.horoscope);
                    }
        
         )
      .catch(err => console.error(err));
      
  };
  useEffect(() => {
    fetchHoroscope();
  }, []);
  const handleSignChange = (event) => {
    setSelectedSign(event.target.value);
  }
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  }
  const HandleButtonClick = () => {
    if(selectedDate=="Month"){
      fetchHoroscope();
    }
    const horoscopes = {
      aries: {
        color: 'Red',
        lucky_number: '9',
        lucky_time: '11:00 am',
        mood: 'Confident',
        horoscope: 'When your ruler, doer Mars, in your domestic corner teams up with organized Saturn today, you’ll have the muscle and the mindset to make changes around the house. Search for vintage finds at a local antique store or on Etsy. Recruit an in-the-know friend to help you choose a good deal that will keep its value. Or look through fabric samples if you’ve done the math and decided that you’d rather reupholster your beloved couch than buy a new one. You might also open up your space by getting rid of stuff you don’t use. That ottoman you’ve never once put your feet (or a tray) on? Sell it on AptDeco or Facebook Marketplace.',
        colorT: "Yellow",
        lucky_numberT: '4',
        lucky_timeT: '10:00 am',
        moodT: 'Peaceful',
        horoscopeT: 'Finding balance in your world will be no sweat once you get into the groove, Aries. Waking up is likely to be the most difficult part of the day, but once you conquer that incredible feat, you should be fine. Try taking a cold shower instead of a warm one this morning. This will serve to open up your mind and get your blood pumping when you need it most.'
      },
      taurus: {
        color: 'Green',
        lucky_number: '4',
        lucky_time: '2:30 pm',
        mood: 'Peaceful',
        horoscope: 'Unexpected visitors could wake you up to the possibility of new work opportunities, Taurus. This could advance your current job or be work you can do on your own - maybe on a volunteer basis. Whatever it is, you will probably find it exciting. You might even be impatient to get on with it. Pace yourself. If you tire yourself out, you wont be able to continue.',
        colorT: "Yellow",
        lucky_numberT: '4',
        lucky_timeT: '10:00 am',
        moodT: 'Confident',
        horoscopeT: 'You may feel like the smallest issue is suddenly a life or death situation, Taurus. Depending on your mood, you may think you re on the brink of complete disaster, but the next minute be soaring high in the clouds. The drama that surrounds you is more a product of your reaction to your environment rather than the environment itself.'
      },
      pisces: {
           colorT: "Blue",
        lucky_numberT: '8',
        lucky_timeT: '03:00 am',
        moodT: 'Happy',
        horoscopeT: 'An opportunity to do some extra work outside the scope of your regular job could present itself to you. Take it, Pisces. Not only could you earn some extra money but you might also open new doors that expand your professional horizons. The only danger is that you might work too hard and tire yourself out. Its OK for a while, but dont make a habit of it. You need to conserve your strength.',
        color: 'Sea Green',
        lucky_number: '12',
        lucky_time: '8:00 am',
        mood: 'Compassionate',
        horoscope: 'Even though you feel most comfortable when things are organized and meticulous, Pisces, youre going to need to be flexible. Allow room for surprise and adventure. Bask in the adventurous spirit that must be adopted when you walk out the door with no idea where you will end up. People and situations that come around today are likely to be foreign but friendly.'
      },
      aquarius: {
        colorT:"Red",
          lucky_numberT:"8",
           moodT:"Happy",
                horoscopeT:"Tackle things that require high energy today, Aquarius. This is your day to make short work of chores, errands, or any sort of physical activity. Patience is the thing that you will lack, if anything, but don't worry, because your strengths lie elsewhere now. Your heart is apt to sing once you get going on a personal project about which you feel passionate.",
                lucky_timeT:"05:00 pm",
        color: 'Turquoise',
        lucky_number: '11',
        lucky_time: '7:00 pm',
        mood: 'Independent',
        horoscope: ' Friends or a group with which youre affiliated could propose a trip. This might seem like a great adventure, Aquarius, so youre likely to go for it. You will probably have a wonderful time. You might make some new friends while youre away, or even fall in love. A little break might fire your enthusiasm for pursuing career or educational opportunities when you return. Go for it! are feeling independent and self-sufficient today. Use this energy to pursue your individual passions and explore new ideas and perspectives.'
      },
      gemini: {
         colorT:"Yellow",
          lucky_numberT:"9",
           moodT:"Independent",
                horoscopeT:"Things may come to you more easily than usual today, Gemini. This is a sign that you're on the right path and doing things correctly. Life shouldn't have to be full of stress and heartache. If something isn't flowing smoothly, you should consider taking a new approach toward it. Keep a smile on your face and be respectful of the people around you.",
                lucky_timeT:"11:00 pm",
        color: 'Pink',
        lucky_number: '5',
        lucky_time: '4:00 pm',
        mood: 'Curious',
        horoscope: 'If you arent romantically involved, an errand, walk, or other foray into your neighborhood might bring an exciting new person into your life. This encounter may or may not lead to something lasting, Gemini, but you will enjoy it anyway! If youre currently involved, a casual outing with your partner could result in intimate conversations that bring the two of you closer.Your mind is sharp and your curiosity is piqued today. Use this energy to learn something new or connect with others who share your interests.'
      },
      cancer: {
         colorT:"Dark",
          lucky_numberT:"23",
           moodT:"Happy",
                horoscopeT:"Money that you may have been hoping to use to better your living or working condition could suddenly come your way today, Cancer. Ideas for how to put it to work in the most efficient, satisfying way could pop into your mind quickly. You will probably want to write them all down, consider your options carefully, and then choose the ones that suit your needs best. Go to it.Check your messages often, Cancer. Someone is trying to contact you and you may keep missing each other by minutes. It's important to connect with this person to take care of some matters. If your objectives are clear, things should work out fine. Two people working toward the same goal make the power of the joint effort extremely potent. Don't underestimate this incredible influence.",
                lucky_timeT:"09:00 am",
        color: 'Silver',
        lucky_number: '2',
        lucky_time: '10:00 am',
        mood: 'Nurturing',
        horoscope: 'Today, you may find yourself in a caring and nurturing mood. Use this energy to support and uplift those around you, including yourself.'
      },
      leo: {
         colorT:"Orange",
          lucky_numberT:"21",
           moodT:"Angry",
                horoscopeT:" When you run errands today, check the bulletin boards in local businesses. You may have been longing for adventure and dreaming about getting away from it all, Leo, but today you might find the excitement you crave right in your community. New events, people, and businesses that you will enjoy could be moving in. You might also discover a group that shares one of your interests.",
                lucky_timeT:"07:00 pm",
        color: 'Gold',
        lucky_number: '1',
        lucky_time: '3:00 pm',
        mood: 'Confident',
        horoscope: 'You will get much farther than you think today, even with minimal effort, Leo. There are plenty of avenues to take now, so even if one is jammed, theres always another that you can reach easily. Soon you will arrive at your destination with time to spare. The trick is to keep moving. Dont get stuck in one place with your engine running.You are radiating with confidence and charisma today. Use this energy to take charge and make things happen in both your personal and professional life.'
      },
      virgo: {
         colorT:"Yellow",
          lucky_numberT:'21',
           moodT:"Grochy",
                horoscopeT:"Don't get too caught up in the emotional side of life today, Virgo. Keep things light and keep them moving. A rolling stone gathers no moss. Unfortunately, you may have quite a bit of that green stuff growing on you now. Get up and get moving. One little bit of effort will send you off and running. Don't hesitate. You're ready to take the plunge.",
                lucky_timeT:"03:00 pm",
        color: 'Navy Blue',
        lucky_number: '3',
        lucky_time: '9:00 am',
        mood: 'Organized',
        horoscope: ' Information received today excites your imagination and encourages you to start a new artistic or creative project, Virgo. Stories, pictures, abstract concepts - all could come together in your mind and form an inspired idea that could change your life. Gird your loins, write down your thoughts, and see where it all takes you. You might be surprised by what you produce!ur attention to detail and organizational skills are at their peak today. Use this energy to tackle any tasks or projects that require precision and focus.'
      },
      libra: {
         colorT:"Brown",
          lucky_numberT:"28",
           moodT:"Sad",
                horoscopeT:"Try not to be overwhelmed by the frenzied activity around you, Libra. Unexpected variables are popping up everywhere, and your first reaction may be to flip out. This is the opposite reaction that you need to have now. Calm yourself down and take small bites. Don't try to eat the whole eight-course meal in one five-minute sitting.",
                lucky_timeT:"05:00 am",
        color: 'Pink',
        lucky_number: '7',
        lucky_time: '6:00 pm',
        mood: 'Harmonious',
        horoscope: 'YAdventure is the word for today, Libra. A lot of physical and mental energy, as well as enthusiasm, might lead you to aim for goals that others consider too risky or unrealistic. Dont let their opinions stop you. After giving each idea an objective assessment, if you still believe you want to try, start looking into it seriously. People have probably made stranger dreams than this come true!our desire for balance and harmony is heightened today. Use this energy to cultivate positive relationships and create a sense of peace in your surroundings.'
      },
      scorpio: {
         colorT:"Red",
          lucky_numberT:"18",
           moodT:"Harmonious",
                horoscopeT:" It's time to bring more fire into your life, Scorpio. Consider calling up an old flame or friend from the past who stirs the passion within you. Inspire your inner yearning for excitement and adventure. Eat spicy foods and adorn yourself in bright colors. Even the smallest actions will help bring more of this dynamic, activating energy to your life.",
                lucky_timeT:"10:00 pm",
        color: 'Black',
        lucky_number: '8',
        lucky_time: '12:00 pm',
        mood: 'Intense',
        horoscope: 'New career goals may come your way with the current aspect, Scorpio, opening up possibilities you may not have considered. This could be very exciting. It might even work toward the fulfillment of childhood dreams that you abandoned long ago. They may involve the arts, modern technology, or both. The only downside is that you might work too hard and get exhausted. Pace yourself.More Horoscopes foYou are feeling intense and passionate today. Use this energy to pursue your deepest desires and make meaningful connections with others.'
      },
      sagittarius: {
         colorT:"Gray",
          lucky_numberT:"18",
           moodT:"Intense",
                horoscopeT:"This is one of those days in which you may ask for five minutes to complete a certain task and an hour later finally finish whatever you set out to do. Keep in mind that this isn't necessarily a bad thing. Things are taking you longer than expected not because you're inefficient but because you're more passionate than usual about what you're doing.",
                lucky_timeT:"01:00 pm",
        color: 'Purple',
        lucky_number: '6',
        lucky_time: '5:00 pm',
        mood: 'Adventurous',
        horoscope: 'Fascinating new information could arrive today from TV or the Internet, opening up new educational opportunities. The possibility of making contact and perhaps visiting new friends in other countries might come to your attention. You will probably find this very exciting, Sagittarius, and make plans immediately. This is fine, but be careful to consider all contingencies. Be practical and objective.ou are itching for adventure and new experiences today. Use this energy to explore new places, try new things, and expand your horizons.'
      },
      capricorn: {
         colorT:"Black",
          lucky_numberT:"3",
           moodT:"Smart",
                horoscopeT:"Don't be afraid of the fire today, Capricorn. Instead, embrace it and incorporate more of it into your life. Certain people may intimidate you at first, but that doesn't mean you should run away from the scene. More than likely this feeling of intimidation is a signal that there's something you need to learn from that person or situation. Stick around and pay attention.",
                lucky_timeT:"03:00 am",
        color: 'Brown',
        lucky_number: '10',
        lucky_time: '1:00 pm',
        mood: 'Ambitious',
        horoscope: ' A sudden burst of physical energy and determination could lead to additional income for you, Capricorn. This is probably due to an unexpected opportunity to do some extra work outside the scope of your usual employment. It could also be a long overdue payment for past work. You could also receive acknowledgement of some kind for work well done, further firing your enthusiasm. Go for the gold!our ambition and drive are at their peak today. Use this energy to make progress towards your long-term goals and set yourself up for success.'
      },
    };
    const horoscope = horoscopes[selectedSign];
      if(selectedDate!="")
      { setSunsign(selectedSign)
        if(selectedDate=="Today"){
          setDate("Today");
          setColor(horoscope.color)
          setNumber(horoscope.lucky_number);
          setTime(horoscope.lucky_time);
          setMood(horoscope.mood);
          setText(horoscope.horoscope)
        }else if (selectedDate== "Tomorrow"){
          setDate("Tomorrow");
          setColor(horoscope.colorT);
          setNumber(horoscope.lucky_numberT);
          setTime(horoscope.lucky_timeT);
          setMood(horoscope.moodT);
          setText(horoscope.horoscopeT)
        }else if(selectedDate=="Month"){
          setDate(month);
          setColor("");
          setNumber("");
          setTime("");
          setMood("");
          setText(horoscopee)
        }
    }
        else{
          return "Pls Select Date"
        }
   
  }
  

  return (
    <>
      <div className='photo-and-select'>
        <div className='for-sign-tablo-photo'></div>
        <p className='information'>Let the enchanting words of the Sun reveal what the mystical stars have in store for you today, simply by selecting your zodiac sign and date to receive your daily horoscope.</p>
        <div className='select'>
          <select name="sign" id="" className='selectSign' placeholder='Select Sign' onChange={handleSignChange}>
            <option value="disabled" disabled selected>Select a zodiac sign</option>
             { <option value="aries">aries</option> } 
             { <option value="taurus">taurus</option>} 
            <option value="gemini">gemini</option>
            <option value="cancer">cancer</option>
            <option value="leo">leo</option> 
            <option value="virgo">virgo</option>
            <option value="libra">libra</option>
            <option value="scorpio">scorpio</option>
             <option value="sagittarius">sagittarius</option> 
            <option value="capricorn">capricorn</option>
            <option value="aquarius">aquarius</option>
            <option value="pisces">pisces</option>
          </select>
          <select name="date" id="" className='selectDate' onChange={handleDateChange}>
            <option value="disabled" disabled selected>Select a date</option> 
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="Month">Month</option>
          </select>
          </div>
          <button className='see-result-button' onClick={HandleButtonClick}>See The Result</button>
</div>
<div className='horoscope-container'>

  <div className='horoscope'>
    <DailyHoroscopeFromServer
      sunsign={sunsign}
      date={date}
      color={color}
      number={number}
      time={time}
      mood={mood}
      text={text}/>
  </div>
</div>
</>
);
}
export default SelectDailyHoroscope;


