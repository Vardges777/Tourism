import React,{Component} from "react"

class CreateOrderCountry extends Component{
    render(){
        return(
        this.props.selectedCountryList.map((item,index)=>{
            return(
                <div className="col-12" key = {index}>
                    <div className="selectedCountry">
                        <div className="selectedHotelInform">
                        <span>
                            Hotem Name
                        </span>
                            <div className="hotelName">
                                {item.name}
                            </div>
                        </div>
                        <div className="selectedHotelInform">
                        <span>
                            1 Night/person
                        </span>
                            <div className="hotelPrice">
                                {item.price}$
                            </div>
                        </div>
                        <div className="selectedHotelInform">
                        <span>
                            Hotel Location
                        </span>
                            {item.location}
                        </div>
                        <button onClick = {this.props.removeSelectedCountry}>
                            Remove from order list
                        </button>
                    </div>
                </div>
            )
        })
        )
    }
}

export default CreateOrderCountry