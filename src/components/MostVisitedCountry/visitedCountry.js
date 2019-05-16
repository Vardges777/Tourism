import React from "react" ;
import "../../assets/stylesheets/styles.scss"


function VisitedCountry(props){
    const style = {
        color:"red",
        fontSize:"30px",
        padding:"10px 0",
        display:props.sale ? "block":"none",
    };

    return(
        <div className="col-12  col-md-6 col-lg-4 col-xl-3 visitedCountry">
            <div className="visitedCountryItem">
                <div className="visitedCountryImg">
                    <img src = {props.imageSrc} alt=""/>
                </div>
                <div className="visitedCountryInformation">
                    <h1 className="py-2">{props.name}</h1>
                    <h1 className="sale" style={style}>Sale</h1>
                    <p  className="pb-1">{props.description}</p>
                    <h2 style = {{color:props.sale ? "red":"black"}}>{props.price}</h2>
                </div>
            </div>
        </div>
    )
}

export default VisitedCountry