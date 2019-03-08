import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import Chart from './chart';

class Graphtab extends Component {

    constructor(props) {
        super(props);
        console.log("inside constructor");
    }



    render() {

        return (

            <div className="card-body" >
                <div className="tab-content" >

                    <div className="tab-pane fade show active" id="overallIncomeTab1" role="tabpanel">
                        <div className="row">


                            <Chart />



                            <div className="col-md-3">

                                <div style={{ 'textAlign': 'left' }}>
                                    <div className="media align-items-center">
                                        <div className="media-body d-flex align-items-baseline">
                                            <span className="u-indicator u-indicator--xxs bg-primary mr-2"></span>
                                            <h5 className="h6 text-muted text-uppercase mb-1">Total Income</h5>
                                        </div>

                                        <div className="d-flex align-items-center h4 text-success">
                                            <span>+9.5%</span>
                                            <span className="small">
                                                <i className="fa fa-arrow-up ml-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <CurrencyFormat className="h3 mb-0" value={this.props.data[0].total_income} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>


                                <hr />


                                <div style={{ 'textAlign': 'left' }}>
                                    <div className="media align-items-center">
                                        <div className="media-body d-flex align-items-baseline">
                                            <span className="u-indicator u-indicator--xxs bg-secondary mr-2"></span>
                                            <h5 className="h6 text-muted text-uppercase mb-1">Total Installs</h5>
                                        </div>

                                        <div className="d-flex align-items-center h4 text-success">
                                            <span>+7.5%</span>
                                            <span className="small">
                                                <i className="fa fa-arrow-up ml-2"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <span className="h3 mb-0"><CurrencyFormat value={this.props.data[0].total_installs} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                                </div>

                                <hr />


                                <div style={{ 'textAlign': 'left' }}>
                                    <div className="media align-items-center">
                                        <div className="media-body d-flex align-items-baseline">
                                            <span className="u-indicator u-indicator--xxs bg-info mr-2"></span>
                                            <h5 className="h6 text-muted text-uppercase mb-1">Active Users</h5>
                                        </div>

                                        <div className="d-flex align-items-center h4 text-danger">
                                            <span>-3.5%</span>
                                            <span className="small">
                                                <i className="fa fa-arrow-down ml-2"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <span className="h3 mb-0"><CurrencyFormat value={this.props.data[0].active_users} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                                </div>
                                <hr />
                                <a className="btn btn-block btn-outline-primary" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Graphtab;