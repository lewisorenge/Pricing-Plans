import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../resources/lottiefiles/14770-success.json'
import { Link } from 'react-router-dom'

class CreditOption extends React.Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div>

                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-sm-4">
                            <h2 className="font-weight-bold mb-4">Congratulations</h2>
                            <div className="mb-4">
                                <Lottie
                                    options={defaultOptions}
                                    height={250}
                                    width={250}
                                    isStopped={false}
                                    isPaused={false} />
                            </div>

                            <p className="mb-4">
                               Nice to have you onboard.Cheers
                                </p>

                            <Link to="/" className="btn btn-primary btn-lg btn-block">Go Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreditOption;