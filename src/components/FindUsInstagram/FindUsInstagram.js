import React,{Component} from "react"
class FindUsInstagram extends Component{

     deleteOffer = () =>{
         localStorage.setItem("popUp","false")
    };
    render() {

        let application = null;
        var showContent;
        let localStoragePopUp = localStorage.getItem("popUp");
        if (localStoragePopUp === null){
            showContent=true;
        }
        else{
            showContent=false;
        }
        if (showContent){
            application=(
                <div className="container-fluid offerSection text-center">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <span onClick = {this.deleteOffer}><img src="http://cdn.onlinewebfonts.com/svg/img_377892.png" alt=""/></span>
                                <h1 className="text-center">
                                    You can find us on Instagram
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <React.Fragment>
                {application}
            </React.Fragment>
        )
    }
}

export default FindUsInstagram