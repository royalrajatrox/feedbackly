import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import * as actions from '../actions';

class Payments extends Component {
    render() {

        return(
            <StripeCheckout
                name="FeedBackLy"
                description="To get the credit of 5 surveys"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
            >
                <button className="btn">ADD CREDITS</button>
            </StripeCheckout>
        )
    }
}

export default connect(null,actions)(Payments);