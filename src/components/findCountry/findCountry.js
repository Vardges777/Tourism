import React,{Component} from "react"
import CountrySrc from "./findCountrySrc"
import CreateHotelItem from "./CreateItem"
import "../../assets/stylesheets/styles.scss";

class FindCountry extends Component{
    constructor(){
        super();
        this.state={
            searchCountry:"",
            countryPrice:0,
            availableCountry:[],
            countrySearchPrice:[],
            filterCountryResult:[],
        }
    }
    handleChange = (event)=>{
        const {name,value} = event.target;
        this.setState({
            [name]:value,
        });
    };
    showValue = () => {
        Object.keys(CountrySrc).forEach((key)=>{
            if(key==this.state.searchCountry){
                this.setState({
                    availableCountry:CountrySrc[key]
                })
            }
        });
        let availablePriceCountry=[];
        const searchPrice=Number(this.state.countryPrice);
        Object.keys(CountrySrc).forEach((item)=>{
            CountrySrc[item].forEach((evt)=>{
                if (searchPrice<evt.priceForOneNight){
                    availablePriceCountry.push(evt);
                }
            })
        });

        const intersection = this.state.countrySearchPrice.filter(element => this.state.availableCountry.includes(element));
        this.setState({
            countrySearchPrice:availablePriceCountry,
            filterCountryResult:intersection
        })

    };

    render(){

        return(
            <div>
                <input type="text" name="searchCountry" onChange={this.handleChange}  placeholder="Country Name"/>
                <input type="text" name="countryPrice"  onChange={this.handleChange}  placeholder="More Than"/>
                <div className="availableCountrySection">
                    <CreateHotelItem
                        availableCountry={this.state.availableCountry}
                        countrySearchPrice={this.state.countrySearchPrice}
                        jj={this.state.filterCountryResult}
                    />
                </div>
                <button onClick={this.showValue} >Check</button>
            </div>
        )

    }
}

export default FindCountry