import React, { Component } from 'react';
import Tags from './tags';
import CurrencyFormat from 'react-currency-format';

class basicTable extends Component {

    constructor() {
        super();
        this.state = {
            showShort: false
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

    handleClick(val) {

        if (this.state.showShort != val) {
            this.setState({

                showShort: val
            });
        }
        else {
            this.setState({

                showShort: 0
            });
        }


    }

    render() {

        return (

            <div className="card mb-4" >
                <header className="card-header">
                    <h2 className="h3 card-header-title">Basic Table</h2>
                </header>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col" width="180">Tag</th>
                                    <th className="text-center" scope="col">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.props.basic.map((data, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.company}</td>
                                        <td>{data.role}</td>
                                        <td><CurrencyFormat value={data.salary} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                        <td><Tags tags={data.tags} cls='badge badge-soft-warning' /></td>
                                        <td className={this.props.shortmenu ? "text-center show" : "text-center"} ref={node => { this.node = node; }}>
                                            <a id="actions1Invoker" className="link-muted" href="#!" aria-haspopup="true" aria-expanded="false" data-display="static"
                                                data-toggle="dropdown" onClick={this.handleClick.bind(this, index + 1)} >
                                                <i className="fa fa-sliders-h" ></i>
                                            </a>
                                            {this.state.showShort === (index + 1) ?
                                                <div className="dropdown-menu dropdown-menu-right dropdown show" style={{ "width": "150px", "position": "absolute", "willChange": "transform", "top": (index * 2 * 20) + "px", "left": "0px", "transform": "translate3d(936px, 150px, 0px)" }} aria-labelledby="actions1Invoker">
                                                    <ul className="list-unstyled mb-0">
                                                        <li onClick={this.props.addModal}>
                                                            <a className="d-flex align-items-center link-muted py-2 px-3" href="#!">
                                                                <i className="fa fa-plus mr-2"></i> Add
															</a>
                                                        </li>
                                                        <li onClick={this.props.handled.bind(this, data.name)}>
                                                            <a className="d-flex align-items-center link-muted py-2 px-3" href="#" >
                                                                <i className="fa fa-minus mr-2" ></i> Remove
															</a>
                                                        </li>
                                                    </ul>
                                                </div> : ""}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {this.props.showmodal ?
                            <div className="modal fade bd-example-modal-lg show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ 'display': 'block' }}>
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Add Data</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.addModal}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={this.props.submit}>
                                                <div>
                                                    <div style={{ 'display': 'inline-block', 'padding': '10px' }}>
                                                        <label >Name:</label>
                                                        <input type="text" name="name" placeholder="name" className='form-control' required />
                                                    </div>
                                                    <div style={{ 'display': 'inline-block', 'padding': '10px' }}>
                                                        <label >Company:</label>
                                                        <input type="text" name="company" placeholder="company" className='form-control' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div style={{ 'display': 'inline-block', 'padding': '10px' }}>
                                                        <label >Role:</label>
                                                        <input type="text" name="role" placeholder="role" className='form-control' />
                                                    </div>

                                                    <div style={{ 'display': 'inline-block', 'padding': '10px' }}>
                                                        <label style={{ 'marginRight': '75%' }}>Salary:</label>
                                                        <input type="text" name="salary" placeholder="salary" className='form-control' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div style={{ 'display': 'inline-block', 'padding': '5px', 'marginRight': '30%' }}>
                                                        <label >Skills:</label>
                                                        <input type="text" name="tags" placeholder="php,js" className='form-control' />
                                                    </div>

                                                </div>


                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.addModal}>Close</button>
                                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default basicTable;