import React, { Component } from 'react';
import * as actionType from '../../../store/action';
import { connect } from 'react-redux';
import Graphdata from './graphtab';

class Incomegraph extends Component {
    constructor() {
        super();
        this.state = {
            'last_7_days': [
                { 'total_income': 112800, 'total_installs': 9151200, 'active_users': 3252191 },
            ],
            'last_30_days': [
                { 'total_income': 2343123, 'total_installs': 8812332, 'active_users': 431233 },
            ],
            'last_90_days': [
                { 'total_income': 54234355, 'total_installs': 234234234, 'active_users': 4532343 },
            ]

        }
    }


    render() {
        return (
            <div className='card mb-4' >
                <header className="card-header d-md-flex align-items-center">
                    <h2 className="h3 card-header-title">Overall Income</h2>

                    <ul className="nav nav-tabs card-header-tabs ml-md-auto mt-3 mt-md-0">
                        <li className="nav-item mr-4">
                            <a className="nav-link active" href="#" role="tab" aria-selected="true" data-toggle="tab" onClick={this.props.switchTab.bind(this, 1)}>
                                <span className="d-none d-md-inline">Last</span>
                                7 days
						</a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link" href="#" role="tab" aria-selected="false" data-toggle="tab" onClick={this.props.switchTab.bind(this, 2)}>
                                <span className="d-none d-md-inline">Last</span>
                                30 days
						</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" role="tab" aria-selected="false" data-toggle="tab" onClick={this.props.switchTab.bind(this, 3)}>
                                <span className="d-none d-md-inline">Last</span>
                                90 days
						</a>
                        </li>
                    </ul>
                </header>
                {this.props.tabs == 1 ? <Graphdata data={this.state.last_7_days} /> : this.props.tabs == 2 ? <Graphdata data={this.state.last_30_days} /> : <Graphdata data={this.state.last_90_days} />}





            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

        'tabs': state.tabStatus
    }
};

const mapDispatchToProps = dispatch => {
    return {

        switchTab: (id) => dispatch({ type: actionType.GRAPH_TAB, tab: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Incomegraph);