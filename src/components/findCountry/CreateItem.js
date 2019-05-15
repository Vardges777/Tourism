import React,{Component} from "react";


class CreateHotelItem extends Component{
    render(){
    return(
        this.props.availableCountry.map((item)=>{
            return(
                <div  key = {item.id} className="availableCountry">
                    <div className="availableCountryImg">
                        <img src = {item.img} alt=""/>
                    </div>
                    <div className="availableCountryInformation">
                        <h1 className="py-2">{item.name}</h1>
                        <p  className="pb-1">{item.airPlaneTicketPrice}$</p>
                        <h2 >{item.priceForOneNight}$</h2>
                    </div>
                    <button className="orderBtn" onClick = {this.props.orderClick}>Order</button>
                </div>
            )
        })
    )}
};

export default CreateHotelItem