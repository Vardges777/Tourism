import React from "react"

function InputPart(props){
    return(
        <div className="row inputPartSection">
            <div className="col-12 col-md-2 inputBlock">
                <span>
                    Country Name(England,France,Germany)
                </span>
                <input type="text" name="searchCountry" onChange = {props.inputChange}  placeholder="Country Name"/>
            </div>
            <div className="col-12 col-md-2 inputBlock">
                <span>
                    1 Night price more than
                </span>
                <input type="number" name="countryPrice"  onChange = {props.inputChange}  placeholder="0$"/>
            </div>
            <div className="col-12 col-md-2 inputBlock">
                <span>
                    People Count
                </span>
                <input type="number" name="personNumber"  onChange = {props.inputChange}  placeholder="1"/>
            </div>
           <div className="col-12 col-md-2 inputBlock">
               <span>
                   Nights Count
               </span>
               <input type="number" name="nightCount"    onChange = {props.inputChange}  placeholder="1"/>
           </div>
            <div className=" inputBlock">
                <input type="submit" onClick={props.searchBtn} value="Show Search Country"/>
            </div>
        </div>
    )
}

export default InputPart