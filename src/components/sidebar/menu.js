import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";
import { withRouter } from 'react-router-dom';

class Menu extends Component {

    render() {


        return (

            <ul className="u-sidebar-nav-menu u-sidebar-nav-menu--top-level" >

                <li className="u-sidebar-nav-menu__item">
                    <Link className="u-sidebar-nav-menu__link" to="/dashboard">
                        <i className="fa fa-cubes u-sidebar-nav-menu__item-icon"></i>
                        <span className="u-sidebar-nav-menu__item-title">Dashboard</span>
                    </Link>
                </li>

                <li className="u-sidebar-nav-menu__item">

                    <Link className="u-sidebar-nav-menu__link" to="/forms">
                        <i className="far fa-edit u-sidebar-nav-menu__item-icon"></i>
                        <span className="u-sidebar-nav-menu__item-title">Forms</span>
                    </Link>
                </li>

                <li className="u-sidebar-nav-menu__item">
                    <Link className="u-sidebar-nav-menu__link" to="/tables">
                        <i className="far fa-list-alt u-sidebar-nav-menu__item-icon"></i>
                        <span className="u-sidebar-nav-menu__item-title">Tables</span>
                    </Link>
                </li>

                <li className={this.props.hasSub ? 'u-sidebar-nav-menu__item u-sidebar-nav--opened' : 'u-sidebar-nav-menu__item'} onClick={this.props.hasMenu}>
                    <a className="u-sidebar-nav-menu__link" href="#!"
                        data-target="#subMenu2">
                        <i className="far fa-user-circle u-sidebar-nav-menu__item-icon"></i>
                        <span className="u-sidebar-nav-menu__item-title">Pages</span>
                        <i className="fa fa-angle-right u-sidebar-nav-menu__item-arrow"></i>
                        <span className="u-sidebar-nav-menu__indicator"></span>
                    </a>

                    <ul id="subMenu2" className={this.props.hasSub ? "u-sidebar-nav-menu u-sidebar-nav-menu--second-level displayMenu" : "u-sidebar-nav-menu u-sidebar-nav-menu--second-level hideMenu"} >

                        <li className="u-sidebar-nav-menu__item">
                            <Link className="u-sidebar-nav-menu__link" to="/signup">
                                <span className="u-sidebar-nav-menu__item-icon">C</span>
                                <span className="u-sidebar-nav-menu__item-title">Sign Up</span>
                            </Link>
                        </li>
                        <li className="u-sidebar-nav-menu__item">
                            <Link className="u-sidebar-nav-menu__link" to="/signin">
                                <span className="u-sidebar-nav-menu__item-icon">S</span>
                                <span className="u-sidebar-nav-menu__item-title">Sign In</span>
                            </Link>
                        </li>
                        <li className="u-sidebar-nav-menu__item">
                            <Link className="u-sidebar-nav-menu__link" to="/recover-password">
                                <span className="u-sidebar-nav-menu__item-icon">R</span>
                                <span className="u-sidebar-nav-menu__item-title">Recover Password</span>
                            </Link>
                        </li>
                        <li className="u-sidebar-nav-menu__item">
                            <Link className="u-sidebar-nav-menu__link" to="/404">
                                <span className="u-sidebar-nav-menu__item-icon">E</span>
                                <span className="u-sidebar-nav-menu__item-title">404</span>
                            </Link>
                        </li>
                        <li className="u-sidebar-nav-menu__item">
                            <Link className="u-sidebar-nav-menu__link" to="/500">
                                <span className="u-sidebar-nav-menu__item-icon">E</span>
                                <span className="u-sidebar-nav-menu__item-title">500</span>
                            </Link>
                        </li>
                    </ul>
                </li>


            </ul >
        );

    }

}
const mapStateToProps = state => {

    return {

        hasSub: state.hasSub
    };
};
const mapDispatchToProps = dispatch => {
    return {
        hasMenu: () => dispatch({ type: actionTypes.HASSUB })
    }

}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu));