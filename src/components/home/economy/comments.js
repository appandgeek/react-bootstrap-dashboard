import React from 'react';


const comments = (props) => {


    return (

        <div className="col-md-6 mb-4 mb-md-0">
            <div className="card h-100">

                <header className="card-header d-flex align-items-center">
                    <h2 className="h3 card-header-title">Comments</h2>

                    <ul className="nav nav-tabs card-header-tabs ml-md-auto mt-4 mt-md-0">
                        <li className="nav-item">
                            <a className={props.status ? "nav-link active" : "nav-link"} role="tab" aria-selected="true"
                                data-toggle="tab" onClick={props.clicked} href="#commentsTab1">Pending
									</a>
                        </li>
                        <li className="nav-item">
                            <a className={props.status ? "nav-link" : "nav-link active"} role="tab" aria-selected="false"
                                data-toggle="tab" onClick={props.clicked} href="#commentsTab2">Approved
									</a>
                        </li>
                    </ul>
                </header>
                <div className="card-body p-0 m-0">
                    <div className="tab-content" id="commentsTabs">

                        {
                            props.status ?

                                props.comment[0].pending.map((pending, index) =>
                                    <div className="tab-pane fade show active" id="commentsTab1" role="tabpanel">
                                        <div className="list-group list-lg-group list-group-flush"></div>
                                        <a className="list-group-item list-group-item-action" key={index} href="#">
                                            <div className="media">
                                                <img className="u-avatar rounded-circle mr-3" src={pending.avatar} alt="Image description" />
                                                <div className="media-body">
                                                    <div className="d-md-flex align-items-center">
                                                        <h4 className="mb-1">
                                                            {pending.username}<span className="badge badge-soft-secondary mx-1">Pro</span>
                                                        </h4>
                                                        <small className="text-muted ml-md-auto">{pending.date_commented}</small>
                                                    </div>

                                                    <p className="mb-0">{pending.comment}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                )


                                :

                                props.comment[0].approved.map((approved, index) =>
                                    <div className="tab-pane fade show active" id="commentsTab2" role="tabpanel">
                                        <div className="list-group list-lg-group list-group-flush"></div>
                                        <a className="list-group-item list-group-item-action" key={index} href="#">
                                            <div className="media">
                                                <img className="u-avatar rounded-circle mr-3" src={approved.avatar} alt="Image description" />
                                                <div className="media-body">
                                                    <div className="d-md-flex align-items-center">
                                                        <h4 className="mb-1">
                                                            {approved.username}<span className="badge badge-soft-secondary mx-1">Pro</span>
                                                        </h4>
                                                        <small className="text-muted ml-md-auto">{approved.date_commented}</small>
                                                    </div>

                                                    <p className="mb-0">{approved.comment}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>


                                )

                        }
                    </div>
                </div>
            </div >
        </div >




    )
}

export default comments;