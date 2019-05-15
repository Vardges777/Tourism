import React,{Component} from "react";
import CreateHotelItem from "./CreateItem";
import CreateOrderCountry from "./CreateOrderCountry";
import Order from "./OrderCountry";
import ShowSearchCountry from "./ShowSearchCountry";
import RemoveSelectedCountry from "./RemoveOrderCountry";
import HandleChange from "./HandleChange";
import MoneyCount from "./MoneyCount"
import InputPart from "./InputPart"
import "../../assets/stylesheets/styles.scss";

class FindCountry extends Component{
    constructor(){
        super();
        this.state = {
            searchCountry:"",
            countryPrice:0,
            personNumber:1,
            nightCount:1,
            availableCountry:[],
            countrySearchPrice:[],
            filterCountryResult:[],
            selectedCountryList:[],
        };
        this.RemoveSelectedCountry = RemoveSelectedCountry.bind(this);
        this.Order = Order.bind(this);
        this.ShowSearchCountry = ShowSearchCountry.bind(this);
        this.HandleChange = HandleChange.bind(this);
    }


    render(){
        console.log(this.state.selectedCountryList);
        return(
            <div className="findCountrySection">
              <InputPart click = {this.HandleChange}/>
                <div className="availableCountrySection">
                    <CreateHotelItem
                        availableCountry = {this.state.availableCountry}
                        countrySearchPrice = {this.state.countrySearchPrice}
                        orderClick = {this.Order}
                      />
                </div>
                <CreateOrderCountry
                    selectedCountryList = {this.state.selectedCountryList}
                    removeSelectedCountry = {this.RemoveSelectedCountry}
                />
                <MoneyCount
                    personCount = {this.state.personNumber}
                    nightCount = {this.state.nightCount}
                    orderCountyList = {this.state.selectedCountryList}
                />
                <button onClick = {this.ShowSearchCountry}>Show Search Country</button>
            </div>
        )

    }
}

export default FindCountry