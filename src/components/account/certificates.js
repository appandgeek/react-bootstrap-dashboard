import React from 'react';

const certificates = (props) => {

    return (
        <div className="card">
            <header className="card-header">
                <h2 className="h3 card-header-title">Certificates</h2>
            </header>

            <div className="card-body">
                {props.certification.map((certificate, index) =>
                    <div className="media d-block d-sm-flex mb-3" key={index}>
                        <div className="d-flex align-items-center justify-content-center bg-light u-icon-wrap--horizontal--lg rounded mb-3 mb-sm-0 mr-sm-4">
                            <i className="fa fa-graduation-cap"></i>
                        </div>

                        <div className="media-body" style={{ 'textAlign': 'left' }}>
                            <div className="h5 font-weight-normal text-muted mb-2">{certificate.duration}</div>
                            <h3 className="mb-0">{certificate.course}</h3>
                            <a className="u-link u-link--primary" href="#!">{certificate.institute}</a>
                        </div>
                    </div>
                )
                }



            </div>
        </div>
    );
}

export default certificates;