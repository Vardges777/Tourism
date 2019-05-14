import React,{Component} from "react";
import CreateHotelItem from "./CreateItem";
import CreateOrderCountry from "./CreateOrderCountry";
import Order from "./OrderCountry";
import ShowSearchCountry from "./ShowSearchCountry";
import RemoveSelectedCountry from "./RemoveOrderCountry";
import HandleChange from "./HandleChange";
import MoneyCount from "./MoneyCount"
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
        return(
            <div>
                <input type="text" name="searchCountry" onChange = {this.HandleChange}  placeholder="Country Name"/>
                <input type="text" name="countryPrice"  onChange = {this.HandleChange}  placeholder="More Than"/>
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
                <input type="text" name="personNumber" onChange={this.HandleChange} placeholder="Person Count"/>
                <input type="text" name="nightCount"   onChange={this.HandleChange} placeholder="Night Count"/>
                <MoneyCount
                    personCount={this.state.personNumber}
                    nightCount={this.state.nightCount}
                    orderCountyList={this.state.selectedCountryList}
                />
                <button onClick = {this.ShowSearchCountry}>Check</button>
            </div>
        )

    }
}

export default FindCountry