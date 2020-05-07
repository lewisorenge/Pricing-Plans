
import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    state = {
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="panel pricing-table">

                        <div className="pricing-plan">
                            <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" className="pricing-img" />
                            <h5 className="pricing-header">Bronze</h5>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">Custom domains</li>
                                <li className="pricing-features-item">Sleeps after 30 mins of inactivity</li>
                            </ul>
                            <span className="pricing-price">Free</span>
                            <Link to="/regform" className="pricing-button">Sign up</Link>
                        </div>

                        <div className="pricing-plan">
                            <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" className="pricing-img" />
                            <h5 className="pricing-header">Silver</h5>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">Never sleeps</li>
                                <li className="pricing-features-item">Multiple workers for more powerful apps</li>
                            </ul>
                            <span className="pricing-price">$150</span>
                            <Link to="/regform" className="pricing-button is-featured">Free trial</Link>
                        </div>

                        <div className="pricing-plan">
                            <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" className="pricing-img" />
                            <h5 className="pricing-header">Gold</h5>
                            <ul className="pricing-features">
                                <li className="pricing-features-item">Dedicated</li>
                                <li className="pricing-features-item">Simple horizontal scalability</li>
                            </ul>
                            <span className="pricing-price">$400</span>
                            <Link to="/regform" className="pricing-button">Free trial</Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
