import React from 'react';
import { Link } from 'react-router-dom';

const forms = () => {
    return (
        <div className="u-content">
            <div className="u-body">

                <div className="mb-4">
                    <nav aria-label="breadcrumb " style={{ 'textAlign': 'left' }}>
                        <h1 className="h3 ">Forms</h1>
                        <ol className="breadcrumb bg-transparent small p-0">
                            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Blank Page</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <header className="card-header ">
                                <h2 className="h3 card-header-title float-left">Form Controls</h2>
                            </header>
                            <div className="card-body">
                                <div className="form-group mb-4">
                                    <label htmlFor="defaultInput">Default input</label>
                                    <input id="defaultInput" className="form-control" type="email" placeholder="Placeholder" aria-describedby="emailHelp" />
                                </div>
                                <hr className="my-4" />
                                <div className="form-group mb-4">
                                    <label htmlFor="inputLeftIcon">Input with left icon</label>
                                    <span className="form-icon-wrapper">
                                        <span className="form-icon form-icon--left">
                                            <i className="fa fa-user-circle form-icon__item"></i>
                                        </span>
                                        <input id="inputLeftIcon" className="form-control form-icon-input-left" type="email" placeholder="Placeholder" aria-describedby="emailHelp" />
                                    </span>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="inputRightIcon">Input with right icon</label>
                                    <span className="form-icon-wrapper">
                                        <span className="form-icon form-icon--right">
                                            <i className="fa fa-user-circle form-icon__item"></i>
                                        </span>
                                        <input id="inputRightIcon" className="form-control form-icon-input-right" type="email" placeholder="Placeholder" aria-describedby="emailHelp" />
                                    </span>
                                </div>

                                <hr className="my-4" />

                                <div className="form-group mb-4" style={{ 'textAlign': 'left' }}>
                                    <label htmlFor="disabledTextInput">Disabled</label>
                                    <input id="disabledTextInput" className="form-control" type="email" placeholder="Placeholder" disabled aria-describedby="disabledTextInput" />
                                    <small className="form-text text-muted ">Text feedback.</small>
                                </div>

                                <div className="form-group mb-4" style={{ 'textAlign': 'left' }}>
                                    <label htmlFor="successTextInput">Success</label>
                                    <input id="successTextInput" className="form-control is-valid" type="email" placeholder="Placeholder" aria-describedby="successTextInput" />
                                    <small className="form-text valid-feedback">Success feedback.</small>
                                </div>

                                <div className="form-group" style={{ 'textAlign': 'left' }}>
                                    <label htmlFor="errorTextInput">Error</label>
                                    <input id="errorTextInput" className="form-control is-invalid" type="email" placeholder="Placeholder" aria-describedby="errorTextInput" />
                                    <small className="form-text invalid-feedback">Error feedback.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <header className="card-header">
                                <h2 className="h3 card-header-title float-left">Pilled Form Controls</h2>
                            </header>
                            <div className="card-body">
                                <div className="form-group mb-4">
                                    <label htmlFor="defaultInput1">Default input</label>
                                    <input id="defaultInput1" className="form-control form-pill" type="email" placeholder="Placeholder" aria-describedby="emailHelp" />
                                </div>

                                <hr className="my-4" />
                                <div className="form-group mb-4">
                                    <label htmlFor="inputLeftIcon1">Input with left icon</label>
                                    <span className="form-icon-wrapper">
                                        <span className="form-icon form-icon--left">
                                            <i className="fa fa-user-circle form-icon__item"></i>
                                        </span>
                                        <input id="inputLeftIcon1" className="form-control form-icon-input-left form-pill" type="email" placeholder="Placeholder" aria-describedby="emailHelp" />
                                    </span>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputRightIcon1">Input with right icon</label>
                                    <span className="form-icon-wrapper">
                                        <span className="form-icon form-icon--right">
                                            <i className="fa fa-user-circle form-icon__item"></i>
                                        </span>
                                        <input id="inputRightIcon1" className="form-control form-icon-input-right form-pill" type="email" placeholder="Placeholder" aria-describedby="emailHelp" />
                                    </span>
                                </div>

                                <hr className="my-4" />

                                <div className="form-group mb-4" style={{ 'textAlign': 'left' }}>
                                    <label htmlFor="disabledTextInput2">Disabled</label>
                                    <input id="disabledTextInput2" className="form-control form-pill" type="email" placeholder="Placeholder" disabled aria-describedby="disabledTextInput2" />
                                    <small className="form-text text-muted">Text feedback.</small>
                                </div>

                                <div className="form-group mb-4" style={{ 'textAlign': 'left' }}>
                                    <label htmlFor="successTextInput2">Success</label>
                                    <input id="successTextInput2" className="form-control form-pill is-valid" type="email" placeholder="Placeholder" aria-describedby="successTextInput2" />
                                    <small className="form-text valid-feedback">Success feedback.</small>
                                </div>

                                <div className="form-group" style={{ 'textAlign': 'left' }}>
                                    <label htmlFor="errorTextInput2">Error</label>
                                    <input id="errorTextInput2" className="form-control form-pill is-invalid" type="email" placeholder="Placeholder" aria-describedby="errorTextInput2" />
                                    <small className="form-text invalid-feedback">Error feedback.</small>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default forms;