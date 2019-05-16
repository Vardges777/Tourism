import React,{Component} from "react"


class  CalculatePrice extends Component{
    render() {
        let price=0;
        this.props.orderCountyList.map((item)=>{
            price = price + (item.price * this.props.personCount * this.props.nightCount)
        })
        return(
            <div className="row finalInformationSection">
                <div className="travellingInformation">
                    Travellers count {this.props.personCount},You want {this.props.nightCount} night
                </div>
                <div className="tourCost">
                    The tour will cost {price}$
                </div>
            </div>
        )
    }
}

export default CalculatePrice