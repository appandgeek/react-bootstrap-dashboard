import React, { Component } from 'react';

class applist extends Component {

    constructor() {
        super();
        this.state = {
            'apps': [
                { 'app_name': 'Assan', 'app_logo': './assets/img/brands-sm/img1.png', 'link': '#' },
                { 'app_name': 'Slack', 'app_logo': './assets/img/brands-sm/img2.png', 'link': '#' },
                { 'app_name': 'Cloud', 'app_logo': './assets/img/brands-sm/img3.png', 'link': '#' },
                { 'app_name': 'Facebook', 'app_logo': './assets/img/brands-sm/img4.png', 'link': '#' },
                { 'app_name': 'Shopify', 'app_logo': './assets/img/brands-sm/img5.png', 'link': '#' },
                { 'app_name': 'Twitter', 'app_logo': './assets/img/brands-sm/img6.png', 'link': '#' }
            ],
            'showApps': false
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

        if (!this.state.showApps) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showApps: !prevState.showApps,
        }));
    }

    render() {

        return (
            <div className="dropdown ml-2" ref={node => { this.node = node; }} >
                <a className="link-muted" href="#!" role="button" aria-expanded="true" onClick={this.handleClick}>
                    <span className="h3">
                        <i className="far fa-circle"></i>
                    </span>
                    <span className="u-indicator u-indicator-top-right u-indicator--xxs bg-warning"></span>
                </a>
                {
                    this.state.showApps ?
                        <div className="dropdown-menu dropdown-menu-right border-0 py-0 mt-4 show" style={{ "width": "360px" }}>

                            <div className="card">
                                <div className="card-header d-flex align-items-center py-3">
                                    <h2 className="h4 card-header-title">Apps</h2>
                                    <a className="ml-auto" href="#">Learn more</a>
                                </div>

                                <div className="card-body py-3">
                                    <div className="row">

                                        {this.state.apps.map((app, index) =>
                                            <div className="col-4 px-2 mb-2" key={index}>
                                                <a className="u-apps d-flex flex-column rounded" href={app.link}>
                                                    <img className="img-fluid u-avatar--xs mx-auto mb-2" src={app.app_logo} alt="" />
                                                    <span className="text-center">{app.app_name}</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div> : null
                }

            </div>


        )

    }
}

export default applist;