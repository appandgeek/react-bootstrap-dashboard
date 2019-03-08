import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

const signin = () => (
    <main className="container-fluid w-100" role="main">
        <div style={{ 'textAlign': 'left' }}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Email Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    else if (!values.password) {
                        errors.password = 'Password Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center bg-white mnh-100vh">
                                <Link className="u-login-form py-3 mb-auto" to="/">
                                    <img className="img-fluid" src="./assets/img/logo.png" style={{ 'width': 160 }} alt="Stream Dashboard UI Kit" />
                                </Link>

                                <div className="u-login-form">
                                    <form className="mb-3" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <h1 className="h2">Welcome Back!</h1>
                                            <p className="small">Login to your dashboard with your registered email address and password.</p>
                                        </div>

                                        <div className="d-flex my-4">
                                            <a className="btn btn-sm btn-dark px-3 mr-2" href="#">
                                                <i className="fab fa-github mr-1"></i> Login with Github
                                    </a>

                                            <a className="btn btn-sm btn-danger px-3" href="#">
                                                <i className="fab fa-google mr-1"></i> Login with Google
                                    </a>
                                        </div>

                                        <p className="small">Or Login with your email below.</p>

                                        <div className="form-group mb-4">
                                            <label >Your email</label>
                                            <input className={
                                                errors.email && touched.email ? 'form-control is-invalid' : 'form-control'
                                            } name="email" type="email" placeholder="john.doe@example.com" onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email} />
                                            <small className="text-danger">
                                                {errors.email && touched.email && errors.email}
                                            </small>

                                        </div>

                                        <div className="form-group mb-4">
                                            <label >Password</label>
                                            <input className={
                                                errors.password && touched.password ? 'form-control is-invalid' : 'form-control'
                                            } name="password" type="password" placeholder="Your password" onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password} />
                                            <small className="text-danger">
                                                {errors.password && touched.password && errors.password}
                                            </small>

                                        </div>

                                        <div className="form-group d-flex justify-content-between align-items-center mb-4">
                                            <div className="custom-control custom-checkbox">
                                                <input className="custom-control-input" id="rememberMe" name="rememberMe" type="checkbox" />
                                                <label className="custom-control-label" htmlFor="rememberMe" >Remember me</label>
                                            </div>

                                            <Link className="link-muted small" to="/recover-password">Forgot Password?</Link>
                                        </div>

                                        <button className="btn btn-primary btn-block" type="submit" disabled={isSubmitting}>Login</button>
                                    </form>

                                    <p className="small">
                                        Don’t have an account? <Link to="/signup">Sign Up here</Link>
                                    </p>
                                </div>

                                <div className="u-login-form text-muted py-3 mt-auto">
                                    <small><i className="far fa-question-circle mr-1"></i> If you are not able to sign in, please <a href="#">contact us</a>.</small>
                                </div>
                            </div>

                            <div className="col-lg-6 d-none d-lg-flex flex-column align-items-center justify-content-center bg-light">
                                <img className="img-fluid position-relative u-z-index-3 mx-5" src="./assets/svg/mockups/mockup.svg" alt="Image description" />

                                <figure className="u-shape u-shape--top-right u-shape--position-5">
                                    <img src="./assets/svg/shapes/shape-1.svg" alt="Image description" />
                                </figure>
                                <figure className="u-shape u-shape--center-left u-shape--position-6">
                                    <img src="./assets/svg/shapes/shape-2.svg" alt="Image description" />
                                </figure>
                                <figure className="u-shape u-shape--center-right u-shape--position-7">
                                    <img src="./assets/svg/shapes/shape-3.svg" alt="Image description" />
                                </figure>
                                <figure className="u-shape u-shape--bottom-left u-shape--position-8">
                                    <img src="./assets/svg/shapes/shape-4.svg" alt="Image description" />
                                </figure>
                            </div>
                        </div>
                    )}
            </Formik>
        </div>
    </main>
);

export default signin;