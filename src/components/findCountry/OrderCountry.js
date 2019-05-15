import React from "react"

function Order (event){
    let boolean = true;
    let hotelPrice = event.target.parentElement.children[1].children[1].children[1].innerHTML;
    hotelPrice = hotelPrice.slice(0,-1);
    let orderHotel = {
        price:hotelPrice,
        name:event.target.parentElement.children[1].children[0].innerHTML,

    };
    if (this.state.selectedCountryList.length==0){
        this.setState({
            selectedCountryList:[...this.state.selectedCountryList,orderHotel]
        })
    }
    else{
        this.state.selectedCountryList.map((item)=>{
            if (item.name == orderHotel.name){
                boolean = false
            }
        })
        if (boolean === true){
            this.setState({
                selectedCountryList: [...this.state.selectedCountryList, orderHotel]
            })
        }
    }
};


export default Order

