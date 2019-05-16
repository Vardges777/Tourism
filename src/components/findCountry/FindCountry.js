import React,{Component} from "react";
import CreateCountryItem from "./CreateItem";
import CreateOrderCountry from "./CreateOrderCountry";
import Order from "./OrderCountry";
import ShowSearchCountry from "./ShowSearchCountry";
import RemoveSelectedCountry from "./RemoveOrderCountry";
import HandleChange from "./HandleChange";
import CalculatePrice from "./CalculatePrice"
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
    confirm = ()=>{
        console.log(this.state.selectedCountryList)
    };
    render(){
        return(
            <div className="container-fluid findCountry">
              <InputPart
                  inputChange = {this.HandleChange}
                  searchBtn = {this.ShowSearchCountry}
              />
                <div className="row availableCountrySection">
                    <CreateCountryItem
                        availableCountry = {this.state.filterCountryResult}
                        countrySearchPrice = {this.state.countrySearchPrice}
                        orderClick = {this.Order}
                      />
                </div>
                <div className="row selectedCountrySection">
                    <CreateOrderCountry
                        selectedCountryList = {this.state.selectedCountryList}
                        removeSelectedCountry = {this.RemoveSelectedCountry}
                    />
                </div>
                <CalculatePrice
                    personCount = {this.state.personNumber}
                    nightCount = {this.state.nightCount}
                    orderCountyList = {this.state.selectedCountryList}
                />
                <button onClick = {this.confirm}>Confirm</button>
            </div>
        )

    }
}

export default FindCountry