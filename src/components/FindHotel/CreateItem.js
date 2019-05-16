import React,{Component} from "react";


class CreateCountryItem extends Component{
    render(){
    return(
        this.props.availableCountry.map((item)=>{
            return(
                <div  key = {item.id} className="col-12 col-md-6 col-lg-4 col-xl-3 availableCountry">
                    <div className="availableCountryImg">
                        <img src = {item.img} alt=""/>
                    </div>
                    <div className="availableCountryInformation">
                        <h1 className="py-2">{item.name}</h1>
                        <div className="hotelLocation">
                            {item.location}
                        </div>
                        <div className="hotelPrice">
                            <span>1Night/1person  - </span>
                            <h2>{item.priceForOneNight}$</h2>
                        </div>

                    </div>
                    <button className="orderBtn" onClick = {this.props.orderClick}>Order</button>
                </div>
            )
        })
    )}
};

export default CreateCountryItem