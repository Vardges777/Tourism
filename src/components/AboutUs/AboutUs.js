import React from "react";
import aboutUsSrc from "./aboutUsSrc";
import "../../assets/stylesheets/styles.scss"


    function AboutUs(){
        return(
            <div className="container mt-5 pt-5 aboutUS">
                <h1 className="text-center">{aboutUsSrc[0].mainTitle}</h1>
                <p className="text-center mt-3">{aboutUsSrc[0].smallDescription}</p>
            </div>
        )
}

export default AboutUs