import React,{Component} from "react"
class FindUsInstagram extends Component{
    constructor(){
        super();
        this.state = {
            open:true
        }
    }
     deleteOffer = () =>{
        this.setState({
            open:false
        })
    };
    render() {
        let storage = this.state.open;
        let application = null;
        localStorage.setItem("popUp",storage);
        if (localStorage["popUp"]==="true"){
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