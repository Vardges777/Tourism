import React from "react"
import CountrySrc from "./AvailableCountrySrc";

function ShowSearchCountry () {
    Object.keys(CountrySrc).forEach((key)=>{
        if(key == this.state.searchCountry){
            this.setState({
                availableCountry:CountrySrc[key]
            })
        }
    });
    let availablePriceCountry=[];
    const searchPrice=Number(this.state.countryPrice);
    Object.keys(CountrySrc).forEach((item)=>{
        CountrySrc[item].forEach((evt)=>{
            if (searchPrice<evt.priceForOneNight){
                availablePriceCountry.push(evt);
            }
        })
    });

    const intersection = this.state.countrySearchPrice.filter(element => this.state.availableCountry.includes(element));
    this.setState({
        countrySearchPrice:availablePriceCountry,
        filterCountryResult:intersection
    })
};

export default ShowSearchCountry