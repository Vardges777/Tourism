import React from "react";
import CountrySrc from "./AvailableCountrySrc";


function ShowSearchCountry () {
    const {
        countryPrice,
        searchCountry
    } = this.state;

    let availableCountryFound = [];
    let availablePriceCountry = [];

    Object.keys(CountrySrc).forEach((key)=>{
        if(key == searchCountry){
            availableCountryFound = CountrySrc[key];
        }
    });

    const searchPrice = Number(countryPrice);

    Object.keys(CountrySrc).forEach((item)=>{
        CountrySrc[item].forEach((evt)=>{
            if (searchPrice<evt.priceForOneNight){
                availablePriceCountry.push(evt);
            }
        })
    });

    this.setState({
        countrySearchPrice:availablePriceCountry,
        availableCountry:availableCountryFound,
    },() => {
        const intersection = this.state.countrySearchPrice.filter(element => this.state.availableCountry.includes(element));
        this.setState({
            filterCountryResult: intersection,
        })
    })
};

export default ShowSearchCountry