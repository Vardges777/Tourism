import React, { Component } from 'react';
import PageContent from "./components/pageContent/pageContent"
import Header from "./components/Header/Header"
import FindCountry from "./components/findCountry/FindCountry"
import {BrowserRouter as Router,Route} from "react-router-dom";


class App extends Component {

    render() {
    return (
        <Router>
            <div className="App">
                <Header/>
                   <Route  path="/" exact component={PageContent}/>
                   <Route  path="/findCountry"  component={FindCountry}/>
            </div>
        </Router>

    );
  }
}

export default App;
