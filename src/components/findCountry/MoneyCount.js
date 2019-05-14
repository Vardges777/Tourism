import React,{Component} from "react"

class  MoneyCount extends Component{

    render() {
        let money=0;
        this.props.orderCountyList.map((item)=>{
            money = money + (item.price * this.props.personCount * this.props.nightCount)
        })
        return(
            <div>
                Travellers count {this.props.personCount},You want {this.props.nightCount} night
                <div>
                    The tour will cost {money}
                </div>
            </div>

        )

    }
}

export default MoneyCount