import React, { Component } from 'react'
import { BrowserRouter as Router , Switch} from 'react-router-dom';
import { Route } from 'react-router';
import LoginPage from './login/Login';
// import Index from './home/HomePage';
import Admin from './Admin';
export default class MyRoute extends Component {
    render() {
        return (
            <Router>
                {/* <Switch> */}
                    {/* <Route path="/" component={App}/> */}
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/homePage"  component={Admin} />
                {/* </Switch> */}
            </Router>
        )
    }
}
