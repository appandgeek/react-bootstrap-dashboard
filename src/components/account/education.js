import React from 'react';

const education = (props) => {

    return (

        <div className="card mb-4">
            <header className="card-header">
                <h2 className="h3 card-header-title">Education</h2>
            </header>

            <div className="card-body">
                <div className="u-timeline">
                    {props.education.map((edu, index) =>
                        <div className="u-timeline__item" key={index}>
                            <div className="h5 font-weight-normal text-muted mb-2">{edu.course_duration}</div>

                            <div className="media d-block d-sm-flex align-items-center">
                                <div className="media-body mb-3 mb-sm-0">
                                    <h3 className="mb-0">{edu.degree}</h3>
                                    <a className="u-link u-link--primary" href="#!">{edu.university}</a>
                                </div>

                                <a className="ml-sm-auto" href="#!">
                                    <img className="img-fluid" src={edu.university_logo} style={{ 'width': 124 }} alt="university logo" />
                                </a>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>

    );
}

export default education;