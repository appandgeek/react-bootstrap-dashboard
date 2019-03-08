import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

const recoverpassword = () => (
    <main className="container-fluid w-100" role="main">
        <Formik
            initialValues={{ email: '' }}
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Email Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
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
                    <div className="row" style={{ 'textAlign': 'left' }}>
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center bg-white mnh-100vh">
                            <Link className="u-login-form py-3 mb-auto" to="/">
                                <img className="img-fluid" src="./assets/img/logo.png" style={{ 'width': 160 }} alt="Stream Dashboard UI Kit" />
                            </Link>

                            <div className="u-login-form ">



                                <form className="mb-3" onSubmit={handleSubmit}>
                                    <h1 className="h2">Recover Your Password</h1>
                                    <p className="small " >If you do not receive an email, please make sure to check your spam folder as well.</p>


                                    <div className="form-group mb-4">
                                        <label htmlFor="email" className="float-left">Your email</label>
                                        <input className={
                                            errors.email && touched.email ? 'form-control is-invalid' : 'form-control'
                                        } name="email" id="email" type="email" placeholder="john.doe@example.com" onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email} />
                                        <small className="text-danger">
                                            {errors.email && touched.email && errors.email}
                                        </small>

                                    </div>


                                    <button className="btn btn-primary btn-block" type="submit" disabled={isSubmitting}>Send Confirmation</button>
                                </form>

                                <p className="small float-left text-muted">
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
    </main>
);

export default recoverpassword;