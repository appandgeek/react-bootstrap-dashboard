import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            'profile': [
                { 'name': 'udaya', 'avatar': './assets/img/avatars/img1.jpg', 'used_storage': '50', 'max_storage': '100', 'profile_link': '#', 'settings': '#', 'invite': '#', 'logout': '#' }
            ],
            'showProfile': false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleOutsideClick(e) {

        if (this.node) {

            if (this.node.contains(e.target)) {
                this.handleClick();
                return;
            }

        }

        this.handleClick();
    }

    handleClick() {

        if (!this.state.showProfile) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showProfile: !prevState.showProfile,
        }));
    }

    render() {

        return (
            <div className="dropdown ml-2" ref={node => { this.node = node; }} >
                <a className="link-muted d-flex align-items-center" href="#!" role="button" onClick={this.handleClick} >
                    <img className="u-avatar--xs img-fluid rounded-circle mr-2" src={this.state.profile[0].avatar} alt="User Profile" />
                    <span className="text-dark d-none d-sm-inline-block">
                        {this.state.profile[0].name} <small className="fa fa-angle-down text-muted ml-1"></small>
                    </span>
                </a>

                {
                    this.state.showProfile ? <div className="dropdown-menu dropdown-menu-right border-0 py-0 mt-3 profile-div-width show" id="prp" aria-labelledby="dropdownMenuLink" >
                        <div className="card">
                            <div className="card-header py-3">

                                <div className="d-flex align-items-center mb-3">
                                    <span className="h6 text-muted text-uppercase mb-0">Storage</span>

                                    <div className="ml-auto text-muted">
                                        <strong className="text-dark">{this.state.profile[0].used_storage}gb</strong> / {this.state.profile[0].max_storage}gb
									</div>
                                </div>

                                <div className="progress profile-progress-bar" >
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </div>

                            <div className="card-body">
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-4">
                                        <Link className="d-flex align-items-center link-dark" to='/profile'>
                                            <span className="h3 mb-0"><i className="far fa-user-circle text-muted mr-3"></i></span> View Profile
									</Link>
                                    </li>
                                    <li className="mb-4">
                                        <a className="d-flex align-items-center link-dark" href={this.state.profile[0].settings}>
                                            <span className="h3 mb-0"><i className="far fa-list-alt text-muted mr-3"></i></span> Settings
										</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="d-flex align-items-center link-dark" href={this.state.profile[0].invite}>
                                            <span className="h3 mb-0"><i className="far fa-laugh-wink text-muted mr-3"></i></span> Invite your friends
										</a>
                                    </li>
                                    <li>
                                        <a className="d-flex align-items-center link-dark" href={this.state.profile[0].logout}>
                                            <span className="h3 mb-0"><i className="far fa-share-square text-muted mr-3"></i></span> Sign Out
										</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div > : null
                }
            </div >
        )
    }
}

export default Profile;