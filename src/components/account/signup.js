import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

const signup = () => (
    <main className="container-fluid w-100" role="main">
        <div style={{ 'textAlign': 'left' }}>
            <Formik
                initialValues={{ username: '', email: '', password: '', confirmpassword: '', country: '', agree: false }}
                validate={values => {
                    let errors = {};

                    if (!values.username) {
                        errors.username = 'Name  is Required';
                    }
                    if (!values.email) {
                        errors.email = 'Email Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.country) {
                        errors.country = "Please choose country ";
                    }
                    if (!values.password) {
                        errors.password = 'Password Required';
                    }
                    if (!values.confirmpassword) {
                        errors.confirmpassword = "Password required";
                    }
                    else if (values.password !== values.confirmpassword) {
                        errors.confirmpassword = "Password not mached";
                    }
                    else if (!values.agree) {
                        errors.agree = "Please accecpt terms &conditions";
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
                                            <h1 className="h2">Claim Your Free account!</h1>
                                            <p className="small">Login to your dashboard with your registered email address and password.</p>
                                        </div>

                                        <div className="form-group mb-4">
                                            <label >Your name</label>
                                            <input type="text" className={
                                                errors.username && touched.username ? 'form-control is-invalid' : 'form-control'
                                            } name="username" placeholder="John Doe" onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.username} />

                                            <small className="text-danger">
                                                {errors.username && touched.username && errors.username}
                                            </small>
                                        </div>

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
                                            <label >Your country</label>
                                            <select className="custom-select" name="country" onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                <option value="">Select your country</option>
                                                <option value="canada">Canada</option>
                                                <option value="belgium">Belgium</option>
                                                <option value="france">France</option>
                                                <option value="germany">Germany</option>
                                                <option value="usa">USA</option>
                                                <option value="uk">UK</option>
                                                <option value="russian-federation">Russian Federation</option>
                                            </select>
                                            <small className="text-danger">
                                                {errors.country && touched.country && errors.country}
                                            </small>
                                        </div>

                                        <div className="form-row">
                                            <div className="col-md-6">
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
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group mb-4">
                                                    <label >Confirm password</label>
                                                    <input className={
                                                        errors.confirmpassword && touched.confirmpassword ? 'form-control is-invalid' : 'form-control'
                                                    } name="confirmpassword" type="password" placeholder="Your password" onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.confirmpassword} />
                                                    <small className="text-danger">
                                                        {errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-4">

                                            <input type="checkbox" id="signupck" className="custom-control-input" name="agree" onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.agree} />
                                            <label className="d-block custom-control-label" htmlFor="signupck">I agree with terms &amp; conditions</label>
                                            <small className="text-danger">
                                                {errors.agree && touched.agree && errors.agree}
                                            </small>
                                        </div>

                                        <button className="btn btn-primary btn-block" type="submit" disabled={isSubmitting}>Sign Up</button>
                                    </form>

                                    <p className="small">
                                        Already have an account? <Link to="signin">Login here</Link>
                                    </p>
                                </div>

                                <div className="u-login-form text-muted py-3 mt-auto">
                                    <small><i className="far fa-question-circle mr-1"></i> If you are not able to sign up, please <a href="#">contact us</a>.</small>
                                </div>
                            </div>

                            <div className="col-lg-6 d-none d-lg-flex flex-column align-items-center justify-content-center bg-light">
                                <img className="img-fluid position-relative u-z-index-3 mx-5" src="./assets/svg/mockups/mockup.svg" alt="description" />

                                <figure className="u-shape u-shape--top-right u-shape--position-5">
                                    <img src="./assets/svg/shapes/shape-1.svg" alt="description" />
                                </figure>
                                <figure className="u-shape u-shape--center-left u-shape--position-6">
                                    <img src="./assets/svg/shapes/shape-2.svg" alt="description" />
                                </figure>
                                <figure className="u-shape u-shape--center-right u-shape--position-7">
                                    <img src="./assets/svg/shapes/shape-3.svg" alt="description" />
                                </figure>
                                <figure className="u-shape u-shape--bottom-left u-shape--position-8">
                                    <img src="./assets/svg/shapes/shape-4.svg" alt="description" />
                                </figure>
                            </div>
                        </div>
                    )}
            </Formik>
        </div>
    </main>
);

export default signup;