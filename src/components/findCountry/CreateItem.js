import React from "react";


function CreateHotelItem(props){
    console.log(props.jj)
    return(
        props.availableCountry.map((item)=>{
            return(
                <div  key={item.id} className="availableCountry">
                    <div className="availableCountryImg">
                        <img src={item.img} alt=""/>
                    </div>
                    <div className="availableCountryInformation">
                        <h1 className="py-2">{item.name}</h1>
                        <p  className="pb-1">{item.airPlaneTicketPrice}</p>
                        <h2 >{item.priceForOneNight}</h2>
                    </div>
                </div>
            )
        })
    )
};

export default CreateHotelItem