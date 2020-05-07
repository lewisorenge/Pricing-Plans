import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import RegistrationForm from './pages/RegistrationForm'
import PaymentForm from './pages/PaymentForm'
import CreditOption from './pages/PaymentOptions/CreditOption'
import PaymentSuccess from './pages/PaymentSucess'

class App extends React.Component {

    state = {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white mb-4">
                    <a className="navbar-brand" href="/">
                        <img src="https://2d1inx1fq9jl3el9kuevt0cs-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/apruve.png" height="30" alt="..." />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Router>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path="/regform" component={RegistrationForm} />
                            <Route path="/payment" component={PaymentForm} />
                            <Route path="/creditcard" component={CreditOption} />
                            <Route path="/success" component={PaymentSuccess} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;