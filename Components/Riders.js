import React from 'react'
import './style.css'
import auto from '../Assets/rickshaw.svg'
import cancelled from '../Assets/Cancelled.jpeg'
import moment from 'moment'

let Riders = (props)=>{
    console.log(props.data)
    return(
       
        <div className='ride-wrapper'>

            <img src={auto} className='auto' />
            <div className='ride-info'>
                <div className="ride-date">{moment(props.data.date).format('LLLL')}</div>
                <div>{`Auto CRN: ${props.data.CRN}`}</div>

            </div>
            
            <div className="location-info">
                    <p className="source">{props.data.source}</p>
                    <p className="destination">{props.data.destination}</p>
            </div>
            
        </div>
    );
}
export default Riders