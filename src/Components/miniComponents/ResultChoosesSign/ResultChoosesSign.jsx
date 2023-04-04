import React from 'react'
import "./ResultCoosesSign.css"
 export const ResultChoosesSign = (props) => {
  return (
    <div className= {`result-main ${props.header==""? 'none':""}`}>
        <div className='result-two'>
         <p className='important-header'>{props.header}</p>
         <p>{props.text}</p>
        </div>
        <div className='result-one'>
            <p className='header'>{props.header2}</p>
            <p>{props.text2}</p>
            <p className='header'>{props.header3}</p>
            <p>{props.text3}</p>
            <p className='header'>{props.header4}</p>
            <p>{props.text4}</p>
        </div>
    </div>
  )
}
export default ResultChoosesSign





