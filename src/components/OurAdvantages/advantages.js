import React,{Component} from "react";
import advantagesSrc from "./advatngesSrc";
import advantagesText from "./advantagesText"
import "../../assets/stylesheets/styles.scss";

class OurAdvantages extends Component{
    constructor(){
        super();
        this.state = {
            open:false,
        };
    }
    showContent = () =>{
       const showContent = this.state.open;
       this.setState({open:!showContent});
    };
    render(){
        let advantagesList = null;
        const btnStyle = {
            display:"inlineBlock",
            width:"140px",
            height:"60px",
            marginTop:"20px",
            cursor: "pointer",
            transition: "1s",
            outline:"0",
            backgroundColor: this.state.open ? "#eeca00" : "white",
        };
        if (this.state.open){
            advantagesList = (
                <div className="col-12 justify-content-center advantageRow my-4 ">
                    <div className="row">
                        {advantagesSrc.map((advantageItem)=>{
                            return (
                                <div className="col-12 col-md-4 advantage mb-2" key={advantageItem.id}>
                                    <h1>{advantageItem.advantageTitle}</h1>
                                    <p>{advantageItem.advantageDescription}</p>
                                </div>
                            )
                        })
                        }
                    </div>

                </div>
            )
        }
        return(
            <div className="container-fluid mt-5">
                <div className="row align-items-center flex-column">
                    <div className="col-10 advantagesText">
                        <h1 className="text-center">{advantagesText[0].text}</h1>
                    </div>
                        {advantagesList}
                       <button onClick = {this.showContent} style = {btnStyle}>Advantages</button>
                </div>
            </div>
        )
    }
}

export default OurAdvantages