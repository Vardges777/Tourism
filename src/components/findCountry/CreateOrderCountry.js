import React,{Component} from "react"

class CreateOrderCountry extends Component{
    render(){
        return(
        this.props.selectedCountryList.map((item,index)=>{
            return(
                <div className="selectedCountry" key = {index}>
                    <div className="selectedCountryName">
                        <div className="hotelName">
                            {item.name}
                        </div>

                        <span>
                            Hotem Name
                        </span>
                    </div>
                    <div className="selectedCountryPrice">
                        <div className="hotelPrice">
                            {item.price}
                        </div>

                        <span>
                            1 Night/person
                        </span>
                    </div>
                    <button onClick = {this.props.removeSelectedCountry}>
                        delete
                    </button>
                </div>
            )
        })
        )
    }
}

export default CreateOrderCountry