import React from "react"


function RemoveSelectedCountry(event){
    var removeCountryName = event.target.parentElement.children[0].children[1].innerHTML;
    var removeCountryItem = this.state.selectedCountryList;
    this.state.selectedCountryList.map((item,index)=>{
        if (item.name==removeCountryName) {
            removeCountryItem.splice(index,1)
            this.setState({
                selectedCountryList:removeCountryItem
            })
        }
    })
}

export default RemoveSelectedCountry