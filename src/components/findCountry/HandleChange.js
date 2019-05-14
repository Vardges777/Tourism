import React from "react"

function HandleChange(event){
    const {name,value} = event.target;
    this.setState({
        [name]:value,
    });
};

export default HandleChange
