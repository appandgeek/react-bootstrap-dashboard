import React, { Component } from 'react';

class notifications extends Component {

    constructor() {
        super();
        this.state = {
            'notifications': [
                { 'header': 'Notifications' },
                {
                    'mails': [
                        { 'name': 'Udaya', 'avatar': './assets/img/avatars/img3.jpg', 'date_recieved': '23 jan 2018', 'content': 'There is new comment' },
                        { 'name': 'Sekar', 'avatar': './assets/img/avatars/img4.jpg', 'date_recieved': '12 feb 2018', 'content': 'Some one liked your post' },
                        { 'name': 'Sathish', 'avatar': './assets/img/avatars/img1.jpg', 'date_recieved': '23 dec 2018', 'content': 'You got messages!!!!' }
                    ]
                }
            ],
            'showNotification': false,
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

        if (!this.state.showNotification) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            showNotification: !prevState.showNotification,
        }));
    }

    render() {
        return (
            <div className="dropdown mr-4" ref={node => { this.node = node; }}>
                <a className="link-muted" href="#!" role="button" aria-expanded="true" onClick={this.handleClick}>
                    <span className="h3">
                        <i className='far fa-bell'></i>
                    </span>
                    <span className="u-indicator u-indicator-top-right u-indicator--xxs bg-secondary"></span>
                </a>
                {this.state.showNotification ?
                    <div className="dropdown-menu dropdown-menu-right border-0 py-0 mt-4 notificationStyle show" aria-labelledby="dropdownMenuLink" >
                        <div className="card">
                            <div className="card-header d-flex align-items-center py-3">
                                <h2 className="h4 card-header-title">{this.state.notifications[0].header}</h2>
                                <a className="ml-auto" href="#">Clear all</a>
                            </div>
                            {this.state.notifications[1].mails.map((mails, index) =>

                                <div className="card-body p-0" key={index}>
                                    <div className="list-group list-group-flush">
                                        <a className="list-group-item list-group-item-action" href="#">
                                            <div className="media align-items-center">
                                                <img className="u-avatar--sm rounded-circle mr-3" src={mails.avatar} alt="Image description" />

                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <h4 className="mb-1">{mails.name}</h4>
                                                        <small className="text-muted ml-auto">{mails.date_recieved}</small>
                                                    </div>

                                                    <p className="text-truncate mb-0 notific-single" >
                                                        {mails.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div >
                    : null}
            </div>
        )
    }
}

export default notifications;
