import React from "react"


function Order (event){
    let boolean=true;
    var price = {
        price:event.target.parentElement.children[1].children[2].innerHTML,
        name:event.target.parentElement.children[1].children[0].innerHTML,
    };
    if (this.state.selectedCountryList.length==0){
        this.setState({
            selectedCountryList:[...this.state.selectedCountryList,price]
        })
    }
    else{
        this.state.selectedCountryList.map((item)=>{
            if (item.name == price.name){
                boolean=false
            }
        })
        if (boolean === true){
            this.setState({
                selectedCountryList: [...this.state.selectedCountryList, price]
            })
        }
    }
};


export default Order

