import React, { Component } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';

class Revenuechart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataChart: [
                {
                    labels: {
                        display: false
                    },
                    datasets: [
                        {
                            data: [65, 25],
                            backgroundColor: [
                                [
                                    "#ffffff",
                                    "#00FF00"
                                ]
                            ]
                        }
                    ],

                    details: {
                        title: "Total Salse",
                        amount: 56000,
                        value: 65
                    }

                },
                {

                    labels: {
                        display: false
                    },
                    datasets: [
                        {
                            data: [35, 65],
                            backgroundColor: [
                                "#fab633",
                                "#f6f9fc"
                            ]
                        }
                    ],

                    details: {
                        title: "Spendings",
                        amount: 6700,
                        value: 35
                    }
                },

                {

                    labels: {
                        display: false
                    },
                    datasets: [
                        {
                            data: [60, 40],
                            backgroundColor: [
                                "#0dd157",
                                "#f6f9fc"
                            ]
                        }
                    ],

                    details: {
                        title: "Income",
                        amount: 38200,
                        value: 60
                    }

                },
                {

                    labels: {
                        display: false
                    },

                    datasets: [
                        {
                            data: [25, 65],
                            backgroundColor: [
                                "#fb4143",
                                "#f6f9fc"
                            ]
                        }
                    ],

                    details: {
                        title: "Cancels",
                        amount: 3400,
                        value: 25
                    }

                }
            ]
        }
    }


    render() {
        return (
            <div className="row">
                {this.state.dataChart.map((data, index) =>
                    <div className="col-sm-6 col-xl-3 mb-4" key={index}>

                        <div className="card">
                            <div className="card-body media align-items-center px-xl-3" style={{ width: 300 }}>
                                <div className="u-doughnut u-doughnut--70 mr-3 mr-xl-2">

                                    <Doughnut
                                        data={data}
                                        width={70}
                                        height={70}
                                        data-colors='["#2972fa","#f6f9fc"]'
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: true,
                                            cutoutPercentage: 85,
                                            tooltips: {
                                                enabled: false
                                            }
                                        }}
                                    />

                                    <div className="u-doughnut__label text-info">{data.details.value}</div>
                                </div>
                                <div className="media-body" style={{ 'textAlign': 'left' }}>
                                    <h5 className="h6 text-muted text-uppercase mb-2">
                                        {data.details.title}  <i className={data.details.title == "Cancels" || data.details.title == "Spendings" ? "fa fa-arrow-down text-danger ml-1" : "fa fa-arrow-up text-success ml-1"}></i>
                                    </h5>
                                    <span className="h2 mb-0 ">${data.details.amount}</span>
                                </div>
                            </div>

                        </div>

                    </div>
                )}
            </div>


        );
    }
}

export default Revenuechart;