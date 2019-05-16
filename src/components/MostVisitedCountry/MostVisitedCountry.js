import React from "react"
import "../../assets/stylesheets/styles.scss"
import VisitedCountry from "./visitedCountry"
import visitedCountrySrc from "./visitedCountrySrc"


function MostVisitedCountry(){
    const visitedCountry=visitedCountrySrc.map(item=>{
        return(
            <VisitedCountry key={item.id} sale={item.sale} imageSrc={item.visitedCountrySrc} name={item.countryName} description={item.countryDescription} price={item.tourPrice}/>
        )
    });
    const countrySectionStyle={
        backgroundImage:"url(https://www.protravel.cz/img/__galerie/29376-31789-93517-55218-62287.jpg)",
        backgroundRepeat:"no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    };
    return(
        <div className="container-fluid visitedCountrySection mt-5 pt-5" style={countrySectionStyle}>
            <div className="row justify-content-center visitedCountryRow">
                <div className="col-12">
                    <div className="row justify-content-center">
                        {visitedCountry}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MostVisitedCountry