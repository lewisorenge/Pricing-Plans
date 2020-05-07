import React from 'react';
import { Link } from 'react-router-dom'

class PaymentForm extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <h4>Set up your payment.</h4>
                            <p>
                                Your membership starts as soon as you set up payment.
                            </p>

                            <p>
                                No commitments.
                                Cancel online anytime.
                            </p>

                            <Link to="/creditcard" className="btn btn-outline-secondary d-flex align-items-center mb-3">
                                <span>
                                    Credit or Debit Card <svg className="bi bi-credit-card" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z" clipRule="evenodd" />
                                        <rect width="3" height="3" x="2" y="9" rx="1" />
                                        <path d="M1 5h14v2H1z" />
                                    </svg>
                                </span>
                                <span className="ml-auto">
                                    <svg className="bi bi-chevron-right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clipRule="evenodd" /></svg>
                                </span>
                            </Link>
                            <Link to="/paypal" className="btn btn-outline-secondary d-flex align-items-center mb-3">
                                <span>
                                    Paypal
                                        </span>
                                <span className="ml-auto">
                                    <svg className="bi bi-chevron-right" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clipRule="evenodd" /></svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentForm;