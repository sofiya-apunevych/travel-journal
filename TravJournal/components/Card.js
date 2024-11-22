import React from "react"

export default function Card(props){
    return(
        
        <div className="card-container">
            <img   className="card-image"
             src={`${props.imageUrl}`}
             
             />
             
          
        
            <div className = "card-sub-container">
                    <div className="pin-container">
                    <img src="./images/pin.png" className="pin"/>
                    <p className="country">{props.location}</p> 
                    <p><a className="googleMapsUrl" href="{props.googleMapsUrl}"
                     target="_blank" >View on Google Maps</a></p>
                    </div>
                <h1 className="title">{props.title}</h1>
                <p className="time-slot">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
        
    )
}