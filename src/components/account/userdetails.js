import React from 'react';
import Tags from '../tables/tags';

const userdetails = (props) => {

    return (

        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4 border-md-right border-light text-center">
                        <img className="img-fluid rounded-circle mb-3" src={props.details[0].avatar} alt="description" style={{ 'width': '84' }} />

                        <h2 className="mb-2">{props.details[0].name}</h2>
                        <h5 className="text-muted mb-4">{props.details[0].designation}</h5>

                        <ul className="list-inline mb-4">
                            <li className="list-inline-item mr-3">
                                <a className="link-muted" href={props.details[0].fb_link} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mr-3">
                                <a className="link-muted" href={props.details[0].tw_link} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mr-3">
                                <a className="link-muted" href={props.details[0].slack_link} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-slack"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="link-muted" href={props.details[0].li_link} target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>

                        <div className="mb-3">
                            <a className="btn btn-primary mb-2" href="#!">Follow Me</a>
                        </div>

                        <a className="link-muted" href="#!">
                            <i className="fa fa-envelope mr-2"></i> Send Message
                            </a>
                    </div>

                    <div className="col-md-8">
                        <h3 className="card-title">About me</h3>
                        <p className="mb-5">{props.details[0].about_user}</p>

                        <div className="row">
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <h4 className="h3 mb-3">Profile Rating</h4>

                                <div className="mb-1">
                                    <span className="font-size-44 text-dark">{props.details[0].rating}</span>
                                    <span className="h1 font-weight-light text-muted">/ 5.0</span>
                                </div>

                                <p className="text-muted mb-0">{props.details[0].total_reviews} Reviews</p>
                            </div>

                            <div className="col-lg-8">
                                <h4 className="h3 mb-3">Skills</h4>

                                <div className="d-flex flex-wrap align-items-center">


                                    <Tags tags={props.details[0].skills} cls="bg-light text-muted rounded py-2 px-3 mb-2 mr-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default userdetails;