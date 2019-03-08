import React, { Component } from 'react';
import Notifications from './notifications/notifications';
import Applist from '../header/applist';
import PropTypes from 'prop-types';

class Headermenus extends Component {

    render() {
        return (
            <div className="dropdown mr-4">
                <a className="link-muted" href="#!" role="button" aria-expanded="true" onClick={this.props.message} onBlur={this.props.blur}>
                    <span className="h3">
                        <i className={this.props.nameclass}></i>
                    </span>
                    <span className="u-indicator u-indicator-top-right u-indicator--xxs bg-secondary"></span>
                </a>

                {this.props.show ? <Notifications notifications={this.props.notifications} /> : null}

                {this.props.apps ? <Applist /> : null}

            </div>


        )
    }

}

Headermenus.propTypes = {

    message: PropTypes.func,
    blur: PropTypes.func
}
export default Headermenus;