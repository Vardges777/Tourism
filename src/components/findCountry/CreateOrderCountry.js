import React,{Component} from "react"

class CreateOrderCountry extends Component{
    render(){
        return(
        this.props.selectedCountryList.map((item,index)=>{
            return(
                <div className="selectedCountry" key = {index}>
                    <div className="selectedCountryName">
                        <span>
                            Hotem Name
                        </span>
                        <div className="hotelName">
                            {item.name}
                        </div>
                    </div>
                    <div className="selectedCountryPrice">
                        <span>
                            1 Night/person
                        </span>
                        <div className="hotelPrice">
                            {item.price}$
                        </div>
                    </div>
                    <div>
                        {item.location}
                    </div>
                    <button onClick = {this.props.removeSelectedCountry}>
                        Remove from order list
                    </button>
                </div>
            )
        })
        )
    }
}

export default CreateOrderCountry