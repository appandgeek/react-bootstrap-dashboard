import React, { Component } from 'react';
import Logo from '../header/logo';
import Search from '../header/search';

import Profile from '../header/profile';
import Notifications from './notifications/notifications';
import Applist from '../header/applist';
import Messages from '../header/notifications/messages';
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";




class Navbar extends Component {


    render() {

        return (
            <div >
                <header className='u-header'>
                    <div className='u-header-left'>
                        <Logo />
                    </div>
                    <div className='u-header-middle' >
                        <a className="js-sidebar-invoker u-sidebar-invoker"
                            style={{ 'cursor': 'pointer' }}
                            data-is-close-all-except-this="true"
                            data-target="#sidebar" onClick={this.props.toggleSide}>
                            <i className="fa fa-bars u-sidebar-invoker__icon--open"  ></i>
                        </a>
                        <Search />
                    </div>
                    <div className='u-header-right'>


                        <Messages />

                        <Notifications />
                        <div className="dropdown mr-4">
                            <Applist />
                        </div>

                        <Profile />


                    </div>
                </header>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        toggleSide: () => dispatch({ type: actionTypes.TOGGLE_SIDEBAR })
    }

}

export default connect(
    null,
    mapDispatchToProps
)(Navbar);