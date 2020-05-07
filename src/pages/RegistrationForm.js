import React from 'react';
import { Link } from 'react-router-dom'

class RegistrationForm extends React.Component {
    render() {
        return (
            <div>
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-sm-4">
                            <h4>Create a password to start your membership.</h4>
                            <p>
                                Just two more steps and you're done!
                                We hate paperwork, too.
                        </p>

                            <form action="#">
                                <div className="form-group mb-4">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" className="form-control" />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="name">Email</label>
                                    <input type="text" id="name" className="form-control" />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <Link to="/payment" className="btn btn-block btn-primary btn-lg">Continue</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;