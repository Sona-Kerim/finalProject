import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
const Card = () => {
  const [keyWord, setKeyWord] =useState("")
  const [keyWord2, setKeyWord2] =useState("")
  const [keyWord3, setKeyWord3] =useState("")
  const [descWord, setDescWord] =useState("")
  const [descWord2, setDescWord2] =useState("")
  const [descWord3, setDescWord3] =useState("")
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [names, setNames] = useState([]);
  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");
  const [key3, setKey3] = useState("");
  const [keys, setKeys] = useState([]);
  const [desc, setDescs] = useState([]);
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");
  const [desc4, setDesc4] = useState([]);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  function clickCard(element) {
    if (
      element.current.classList.contains("flipped") &&
      element.current.classList.contains("imageFront")
    ) {
      element.current.classList.remove("imageFront");
    } else {
      element.current.classList.add("flipped");
      element.current.classList.add("imageFront");
    }
  }
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9cf65e8a7bmsh67838c7aa6b14fbp1c3555jsn615bb9eff1e9",
        "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com",
      },
    };
    fetch("https://horoscope-astrology.p.rapidapi.com/threetarotcards", options)
      .then((response) => response.json())
      .then((response) => {
        setNames(response.res.map((data) => data.name));
        setKeys(response.res.map((data) => data.rdesc));
        setDescs(response.res.map((data) => data.desc));
      });
  }, []);
  const DataChange1 = () => {
    if (name1 === "" && key1==="") {
      setName1(names[0]);
      setKey1(keys[0]);
      setDesc1(desc[0]);
      setKeyWord ("Keys:")
      setDescWord ("Desc:")
    } else {
      setName1("");
      setKey1("");
      setDesc1("")
      setKeyWord("")
      setDescWord("")
    }
  };
  const DataChange2 = () => {
    if (name2 === "") {
      setName2(names[1]);
      setKey2(keys[1]);
      setKeyWord2 ("Keys:")
      setDesc2(desc[1])
      setDescWord2("Desc:")
    } else {
      setName2("");
      setKey2("");
      setKeyWord2("")
      setDesc2("")
      setDescWord2("")
    }
  };
  const DataChange3 = () => {
    if (name3 === "") {
      setName3(names[2]);
      setKey3(keys[2]);
      setKeyWord3 ("Keys:")
      setDesc3(desc[2])
      setDescWord3("Desc:")
    } else {
      setName3("");
      setKey3("");
      setKeyWord3("")
      setDesc3("")
      setDescWord3("")
    }
  };
  const handleClick1 = () => {
    clickCard(card1Ref);
    DataChange1();
  };
  const handleClick2 = () => {
    clickCard(card2Ref);
    DataChange2();
  };
  const handleClick3 = () => {
    clickCard(card3Ref);
    DataChange3();
  };

  return (
    <div className="main-div">
      <h4 className="click-on-card">
        To see 3 randomly selected cards for you, simply click on it.
      </h4>
      <div className="cards-flex-div">
        <div className="card-torot" ref={card1Ref} onClick={handleClick1}>
          <h5 className="name">{name1}</h5>
          <h5 className="card-name"><span className="key-word">{keyWord} </span>{key1}</h5>
          <h5 className="card-name desc"><span className="desc-word">{descWord} </span>{desc1}</h5>
        </div>
        <div className="card-torot" ref={card2Ref} onClick={handleClick2}>
          <h5 className="name">{name2}</h5>
          <h5 className="card-name"><span className="key-word">{keyWord2} </span>{key2}</h5>
          <h5 className="card-name desc"><span className="desc-word">{descWord2} </span>{desc2}</h5>
        </div>
        <div className="card-torot" ref={card3Ref} onClick={handleClick3}>
          <h5 className="name">{name3}</h5>
          <h5 className="card-name"><span className="key-word">{keyWord3} </span>{key3}</h5>
          <h5 className="card-name desc"><span className="desc-word">{descWord3} </span>{desc3}</h5>
          
        </div>

    </div>
    </div>
)}
export default Card

