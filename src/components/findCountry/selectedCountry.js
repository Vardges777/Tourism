import React,{Component} from "react"

class SelectedCountry extends Component{
    constructor(){
        super()
    }


    render(){
        return(
        this.props.selectedCountryList.map((item,index)=>{
            return(
                <div className="selectedCountry" key={index}>
                    <div className="selectedCountryName">
                        {item.name}
                    </div>
                    <div className="selectedCountryPrice">
                        {item.price}
                    </div>
                    <button onClick={this.props.removeSelectedCountry}>
                        delete
                    </button>
                </div>
            )
        })
        )



    }
}

export default SelectedCountry