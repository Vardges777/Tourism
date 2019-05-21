import React,{Component} from "react"
import "../../assets/stylesheets/styles.scss";


class OurTeam extends Component{
    constructor() {
        super();
        this.state = {
            data: [],
            finalNameSurname:``,
        };
    };
    componentDidMount() {
        this.apiGet();
    };
    apiGet() {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url, {
            method: "GET"
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    this.setState({ data: json });
                });
            }
        });
    };
    createItem = () => {
        return this.state.data.map((item, index) => {
            return (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 teamMember mb-5" key={index - 1}>
                    <div className="teamMemberImage">
                        <img src="https://previews.123rf.com/images/goodluz/goodluz1306/goodluz130600324/20199891-man-in-office-working-on-desktop-computer.jpg" alt=""/>
                    </div>
                    <div className="teamMemberInformation">
                        <h1>Position</h1>
                        <h2 key={index}>{item.name} </h2>
                        <h2 key={index + 1}>{item.username} </h2>
                    </div>
                </div>
            )
        })
    };
    render() {
        return (
            <div className="container-fluid teamMembers mt-5">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="row">
                            {this.createItem()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurTeam