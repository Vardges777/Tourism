import React from "react"
import AboutUs from "../AboutUs/AboutUs";
import MostVisitedCountry from "../../components/MostVisitedCountry/MostVisitedCountry"
import OurAdvantages from "../OurAdvantages/advantages"
import Form from "../../components/Form/Form"
import OurTeam from "../../components/OurTeam/ourTeam"
import FindUsInstagram from "../FindUsInstagram/FindUsInstagram"



function PageContent (){

    return(
            <React.Fragment>
                <FindUsInstagram/>
                <AboutUs/>
                <MostVisitedCountry/>
                <OurAdvantages/>
                <OurTeam/>
                <Form/>
            </React.Fragment>
        )
}

export default PageContent