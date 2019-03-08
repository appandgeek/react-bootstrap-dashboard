import React from 'react';
import CurrencyFormat from 'react-currency-format';


const advancedtable = (props) => {

    return (

        <div className="card">
            <header className="card-header">
                <h2 className="h3 card-header-title">Table with links and progress</h2>
            </header>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Role</th>
                                <th scope="col">Avg. Progress</th>
                                <th scope="col">Salary</th>
                                <th scope="col" width="180">Tag</th>
                                <th className="text-center" scope="col">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.basic.map((data, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.role}</td>
                                    <td><div className="progress" style={{ "height": '6px', "borderRadius": '3px' }}>
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{ 'width': data.progress, 'borderRadius': '3px' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div></td>
                                    <td><CurrencyFormat value={data.salary} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                    <td>{data.tags} </td>
                                    <td className="text-center">
                                        <a className="u-link mr-2" href="#!">
                                            <i className="fa fa-pencil"></i>
                                        </a>
                                        <a className="link-muted" href="#!">
                                            <i className="fa fa-trash" onClick={props.clicked.bind(this, data.name)}></i>
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}



export default advancedtable;