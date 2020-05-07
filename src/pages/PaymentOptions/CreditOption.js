import React from 'react';

class CreditOption extends React.Component {
    processPayment = () => {
        // Send Api request to service provider (Stripe, Braintree etc) - We can use axios
        // Wait for payment callback from backend 

        // Redirect to relevant page
        this.props.history.push('/success');
    }

    render() {
        return (
            <div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <h4>Set up your credit or debit card.</h4>

                            <div className="card bg-light mb-4">
                                <div className="card-body d-flex align-items-center">
                                    <div>
                                        <h6 className="mb-0 font-weight-bold">Standard Plan</h6>
                                        <p className="mb-0">25$/mo.</p>
                                    </div>

                                    <a href="" className="ml-auto">Change Plan</a>
                                </div>
                            </div>

                            <form>
                                <div className="form-group mb-4">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" id="first-name" className="form-control" placeholder="First Name" />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="last-name">Last Name</label>
                                    <input type="text" id="last-name" className="form-control" placeholder="Last Name" />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="card-number">Card Number</label>
                                    <input type="text" id="card-number" className="form-control" placeholder="Card Number" />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="card-number">Expiration Date</label>
                                    <input type="text" id="expiration-date" className="form-control" placeholder="Expiration Date" />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="cvv">Security Code (CVV)</label>
                                    <input type="text" id="cvv" className="form-control" placeholder="Security Code (CVV)" />
                                </div>

                                <p className="text-muted mb-4">
                                    <small>
                                        By checking the checkbox below, you agree to our Terms of Use, Privacy
                                        Statement, and that you are over 18. You may cancel at any time.
                                        Appruve will automatically continue your subscription and charge
                                        the subscription fee (currently 15$) to your payment method on a monthly basis until
                                        you cancel.
                                </small>
                                </p>

                                <div className="form-group">
                                    <button onClick={this.processPayment} className="btn btn-lg btn-primary btn-block">Start Subscription</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreditOption;