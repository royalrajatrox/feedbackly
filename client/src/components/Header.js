import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './payments';

class Header extends Component {
    renderContent() {
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;

            default:
                return [
                    <li key="1"><Payments/></li>,
                    <li key="2" style={{margin: '0 10px' }}>
                           Credits: {this.props.auth.credits}
                    </li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>

            ];


        }
    }

    render() {
        console.log("mcaf: ",this.props);
        return (
                <nav>
                    <div className="nav-wrapper">
                        <Link
                            to ={this.props.auth ? '/surveys' : '/'}
                            className="brand-logo"
                        >
                            FeedBackLy
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
        );
    }
}
function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);