import React,{Component} from "react"
import CountrySrc from "./findCountrySrc"
import CreateHotelItem from "./CreateItem"
import SelectedCountry from "./selectedCountry"
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
            selectedCountryList:[],
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

    removeSelectedCountry=(event)=>{
        var removeCountryName = event.target.parentElement.children[0].innerHTML;
        var removeCountryItem = this.state.selectedCountryList;
        this.state.selectedCountryList.map((item,index)=>{
            if (item.name==removeCountryName) {

                removeCountryItem.splice(index,1)
                this.setState({
                    selectedCountryList:removeCountryItem
                },()=>{
                    console.log(this.state.selectedCountryList)
                })
            }
        })
    }


    order =(event)=>{
        let boolean=true;
        var price = {
            price:event.target.parentElement.children[1].children[2].innerHTML,
            name:event.target.parentElement.children[1].children[0].innerHTML,
        };
        if (this.state.selectedCountryList.length==0){
            this.setState({
                selectedCountryList:[...this.state.selectedCountryList,price]
            })
        }
        else{
            this.state.selectedCountryList.map((item)=>{
              if (item.name==price.name){
                  boolean=false
              }
            })
            if (boolean===true){
                this.setState({
                    selectedCountryList: [...this.state.selectedCountryList, price]
                })
            }
        }


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
                        orderClick={this.order}
                      />
                </div>
                <SelectedCountry
                    selectedCountryList={this.state.selectedCountryList}
                    removeSelectedCountry={this.removeSelectedCountry}
                />
                <button onClick={this.showValue} >Check</button>
            </div>
        )

    }
}

export default FindCountry