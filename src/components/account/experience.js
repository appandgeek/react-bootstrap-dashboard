import React from 'react';

const experience = (props) => {

    return (


        <div className="col-lg-6">
            <div className="card mb-4">
                <header className="card-header">
                    <h2 className="h3 card-header-title">Experience</h2>
                </header>

                <div className="card-body">
                    <div className="u-timeline">
                        {props.experience.map((exp, index) =>
                            <div className="u-timeline__item" key={index}>
                                <div className="h5 font-weight-normal text-muted mb-2">{exp.duration}</div>
                                <h3 className="mb-0">{exp.designation}</h3>
                                <p className="mb-2">
                                    <a className="u-link u-link--primary" href="#!">{exp.organization}</a>
                                </p>
                                <p className="mb-0">{exp.description}</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>

    );
}

export default experience;