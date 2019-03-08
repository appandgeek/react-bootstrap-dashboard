import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Total Income',
                    borderColor: 'rgba(107,21,182,0.6)',
                    backgroundColor: 'rgba(107,21,182,0.6)',
                    data: [0, 2700, 2600, 2550, 4000, 10000, 20000, 10000, 5000, 6000, 5500, 3000]
                }, {
                    label: 'Total Installs',
                    borderColor: 'rgba(41,114,250,0.6)',
                    backgroundColor: 'rgba(41,114,250,0.6)',
                    data: [2700, 2000, 3000, 18000, 10000, 5000, 4000, 5000, 8000, 5000, 2000, 2100]
                }, {
                    label: 'Active Users',
                    borderColor: 'rgba(97,200,167,0.6)',
                    backgroundColor: 'rgba(97,200,167,0.6)',
                    data: [0, 2000, 3500, 4000, 3500, 2000, 2100, 5500, 15000, 5500, 2000, 2100]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                elements: {
                    point: {
                        radius: 0
                    },
                    line: {
                        borderWidth: 1
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            borderDash: [8, 8],
                            color: '#eaf2f9'
                        },
                        ticks: {
                            fontFamily: 'Open Sans',
                            fontColor: '#6e7f94'
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            borderDash: [8, 8],
                            color: '#eaf2f9'
                        },
                        ticks: {
                            fontFamily: 'Open Sans',
                            fontColor: '#6e7f94'
                        }
                    }]
                },
                tooltips: {
                    enabled: true,
                    intersect: 1
                }

            }
        }

    }



    render() {
        return (
            <div className="col-md-9 mb-4 mb-md-0" style={{ "minHeight": "300px" }}>
                <Line
                    data={this.state.chartData}
                    width={70}
                    height={300}
                    data-set={[65, 35]}
                    data-colors={["#2972fa", "#f6f9fc"]}
                    options={this.state.options}
                />
            </div>
        );
    }
}
export default Chart;