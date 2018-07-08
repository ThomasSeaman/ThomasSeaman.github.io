import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import About from '../About/About'
// import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'



class Container extends Component {


    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Route exact path='/' component={About} />
                    {/* <Route exact path='/Portfolio' component={Portfolio} /> */}
                    <Route exact path='/Contact' component={Contact} />
                </div>
            </Router>
        )
    }
}


export default Container;
