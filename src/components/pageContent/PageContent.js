import React from "react"
import MostVisitedCountry from "../../components/MostVisitedCountry/MostVisitedCountry"
import OurAdvantages from "../OurAdvantages/Advantages"
import Form from "../../components/Form/Form"
import OurTeam from "../OurTeam/OurTeam"
import FindUsInstagram from "../FindUsInstagram/FindUsInstagram"



function PageContent (){

    return(
            <React.Fragment>
                <FindUsInstagram/>
                <MostVisitedCountry/>
                <OurAdvantages/>
                <OurTeam/>
                <Form/>
            </React.Fragment>
        )
}

export default PageContent