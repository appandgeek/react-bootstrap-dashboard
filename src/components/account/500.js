import React from 'react';

const servererror = () => {

    return (
        <main className="d-flex align-items-center justify-content-center w-100 h-100" role="main">
            <div className="container text-center">
                <div className="u-error" style={{ 'marginTop': '21%' }}>
                    <span className="u-error__title">500</span>

                    <div className="u-error__text">
                        <h1 className="mb-2">Internal Server Error</h1>
                        <a href="/">Go to dashboard</a>
                    </div>
                </div>
            </div>

            <figure className="u-shape u-shape--top-right u-shape--position-1 d-none d-md-inline-block">
                <img src="./assets/svg/shapes/shape-1.svg" alt="description" />
            </figure>
            <figure className="u-shape u-shape--centered u-shape--position-2 d-none d-md-inline-block">
                <img src="./assets/svg/shapes/shape-2.svg" alt="description" />
            </figure>
            <figure className="u-shape u-shape--centered u-shape--position-3 d-none d-md-inline-block">
                <img src="./assets/svg/shapes/shape-3.svg" alt="description" />
            </figure>
            <figure className="u-shape u-shape--bottom-left u-shape--position-4 d-none d-md-inline-block">
                <img src="./assets/svg/shapes/shape-4.svg" alt="description" />
            </figure>
        </main>
    );
}

export default servererror;