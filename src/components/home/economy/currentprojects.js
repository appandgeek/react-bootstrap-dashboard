import React from "react";
import CurrencyFormat from "react-currency-format";

const currentprojects = props => {
  return (
    <div className="col-md-6 mb-4 mb-md-0">
      <div className="card h-100">
        <header className="card-header d-flex align-items-center">
          <h2 className="h3 card-header-title">Current Projects</h2>

          <ul className="list-inline ml-auto mb-0">
            <li className="list-inline-item mr-3">
              <a className="link-muted h3" href="#!">
                <i className="far fa-bell" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="link-muted h3" href="#!">
                <i className="far fa-edit" />
              </a>
            </li>
          </ul>
        </header>

        <div className="card-body">
          <div className="d-flex justify-content-between mb-4">
            <div>
              <span className="d-none d-lg-block text-muted small text-uppercase mb-1">
                Total Project
              </span>
              <span className="h4 text-primary">
                {props.projects[0].details[0].total_projects}
              </span>
            </div>

            <div className="divider divider-vertical mx-2" />

            <div>
              <span className="d-none d-lg-block text-muted small text-uppercase mb-1">
                Tasks
              </span>
              <span className="h4 text-info">
                {props.projects[0].details[0].tasks}
              </span>
            </div>

            <div className="divider divider-vertical mx-2" />

            <div>
              <span className="d-none d-lg-block text-muted small text-uppercase mb-1">
                Complete
              </span>
              <span className="h4 text-success">
                {props.projects[0].details[0].compleated}
              </span>
            </div>

            <div className="divider divider-vertical mx-2" />

            <div>
              <span className="d-none d-lg-block text-muted small text-uppercase mb-1">
                In Progress
              </span>
              <span className="h4 text-warning">
                {props.projects[0].details[0].in_progress}
              </span>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-active text-muted">
                <tr className="small text-muted text-uppercase">
                  <th>Project Name</th>
                  <th>Tasks</th>
                  <th>Budget</th>
                  <th>Progress</th>
                </tr>
              </thead>

              <tbody>
                {props.projects[0].projects.map((project, index) => (
                  <tr key={index}>
                    <td className="align-middle">
                      <div className="media align-items-center">
                        <div className="u-icon u-icon--sm bg-success text-white rounded-circle mr-3" />

                        <div className="media-body">
                          <h4 className="mb-0">{project.title}</h4>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle font-weight-semibold">
                      <span className="text-muted">
                        {project.assigned_task}/{project.finished}
                      </span>
                    </td>
                    <td className="align-middle font-weight-semibold">
                      <CurrencyFormat
                        value={project.budget}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </td>
                    <td className="align-middle">
                      <div className="progress project-progress">
                        <div
                          className={
                            (project.finished / project.assigned_task) * 100 >
                              0 &&
                            (project.finished / project.assigned_task) * 100 <
                              40
                              ? "progress-bar bg-secondary project-progress-bar progress-red"
                              : (project.finished / project.assigned_task) *
                                  100 >
                                  40 &&
                                (project.finished / project.assigned_task) *
                                  100 <
                                  60
                              ? "progress-bar bg-secondary project-progress-bar progress-yellow"
                              : "progress-bar bg-secondary project-progress-bar"
                          }
                          role="progressbar"
                          style={{
                            width:
                              (project.finished / project.assigned_task) * 100
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default currentprojects;
