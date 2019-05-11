import React,{Component} from "react"
class FindUsInstagram extends Component{
    constructor(){
        super();
        this.state={
            open:true
        }
    }
     deleteOffer = () =>{
        this.setState({
            open:false
        })
    };
    render() {
        let storage=this.state.open;
        let application=null;
        localStorage.setItem("name",storage);
        if (localStorage["name"]==="true"){
            application=(
                <div className="offerSection text-center">
                    <div className="content">
                        <span onClick={this.deleteOffer}><img src="http://cdn.onlinewebfonts.com/svg/img_377892.png" alt=""/></span>
                        <h1 className="text-center">
                          You can Find us on instagram
                        </h1>
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