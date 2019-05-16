import React,{Component} from "react"


class Form extends Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            telephone:"",
            visa:false,
            gender:"",
            duration:"1 week",
            travelWidth:"",
            travelersNumber:""
        };
    }

    inputChange = (event)=>{
        const {name,value,type,checked} = event.target;
        type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]: value});
    };
    render() {
        return (
            <div className="container-fluid formSection">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <form className="text-center" action="">
                            <h1 className="text-center mb-4">If you want to travel with us submit the form and we will contact with You as soon as possible</h1>
                            <div className="nameSurname">
                                <label htmlFor="">
                                    <input
                                        type="text"
                                        value = {this.state.firstName}
                                        name="firstName"
                                        placeholder="First Name"
                                        onChange = {this.inputChange}
                                    />
                                    <input
                                        type="number"
                                        value = {this.state.telephone}
                                        name="telephone"
                                        placeholder="Telephone"
                                        onChange = {this.inputChange}
                                    />
                                </label>
                            </div>
                            <div className="visa">
                                <label htmlFor="">Do you have visa?
                                    <input
                                        type="checkbox"
                                        name="visa"
                                        checked = {this.state.visa}
                                        onChange = {this.inputChange}
                                    />
                                </label>
                            </div>
                            <div className="travelWith">
                                <label htmlFor="">Travel Alone
                                    <input
                                        type="radio"
                                        name="travelWidth"
                                        value="travelAlone"
                                        checked = {this.state.travelWidth === "travelAlone"}
                                        onChange = {this.inputChange}
                                    />
                                </label>
                                <label htmlFor="">Travel Width
                                    <input
                                        type="radio"
                                        name="travelWidth"
                                        value="travelWidth"
                                        checked = {this.state.travelWidth === "travelWidth"}
                                        onChange = {this.inputChange}
                                    />
                                </label>
                            </div>
                            <div className="travelWithWhom" style={{display:this.state.travelWidth === "travelWidth" ? "block":"none"}}>
                                <label htmlFor="">
                                    <input
                                        type="number"
                                        name="travelersNumber"
                                        value = {this.state.travelersNumber}
                                        onChange = {this.inputChange}
                                    />
                                </label>
                                <h3>Travelers number {this.state.travelersNumber}</h3>
                            </div>

                            <div className="gender">
                                <label htmlFor="">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked = {this.state.gender === "male"}
                                        onChange = {this.inputChange}
                                    />Male
                                </label>
                                <label htmlFor="">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked = {this.state.gender === "female"}
                                        onChange = {this.inputChange}
                                    />Female
                                </label>
                            </div>
                            <div className="tourDuration">
                                <label>Tour Duration
                                    <select
                                        value = {this.state.duration}
                                        onChange = {this.inputChange}
                                        name="duration">
                                        <option value="1 week">1 week</option>
                                        <option value="2 week">2 week</option>
                                        <option value="more than 2 week">More than 2 week</option>
                                    </select>
                                </label>
                            </div>
                            <div className="userInformation">
                                <h2 style={{display:this.state.firstName === "" ? "none":"block"}}>Your name is {this.state.firstName} </h2>
                                <h2 style={{display:this.state.telephone === "" ? "none":"block"}}>Your telephone number is {this.state.telephone}</h2>
                                <h2 style={{display:this.state.gender === "" ? "none":"block"}}>You ara a {this.state.gender}</h2>
                                <h2>Travelling duration {this.state.duration}</h2>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Form