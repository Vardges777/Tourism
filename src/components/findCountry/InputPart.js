import React from "react"

function InputPart(props){
    return(
        <div className="inputPart">
            <div className="inputBlock">
                <span>
                    Country Name
                </span>
                <input type="text" name="searchCountry" onChange = {props.click}  placeholder="Country Name"/>
            </div>
            <div className="inputBlock">
                <span>
                    1 Night price more than
                </span>
                <input type="text" name="countryPrice"  onChange = {props.click}  placeholder="More Than"/>
            </div>
            <div className="inputBlock">
                <span>
                    Person Count
                </span>
                <input type="text" name="personNumber"  onChange = {props.click}  placeholder="Person Count"/>
            </div>
           <div className="inputBlock">
               <span>
                   Night Count
               </span>
               <input type="text" name="nightCount"    onChange = {props.click}  placeholder="Night Count"/>
           </div>
        </div>
    )
}

export default InputPart