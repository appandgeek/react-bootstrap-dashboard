import React from "react";

const latestprojects = props => {
  return props.projects.map((project, index) => (
    <div className="col-sm-6 col-lg-3 mb-3 mb-md-0" key={index}>
      <div className="card">
        <header className="card-header bg-light">
          <div className="media align-items-center">
            <div className="u-icon u-icon--sm bg-success text-white rounded-circle mr-2">
              <i className={project.avatar} />
            </div>

            <div className="media-body">
              <h4 className="mb-0">{project.title}</h4>
            </div>
          </div>
        </header>

        <div className="card-body">
          <div className="d-flex align-items-center mb-2">
            Progress
            <div className="font-weight-semibold ml-auto">
              124
              <span className="text-muted">/ {project.progress}</span>
            </div>
          </div>

          <div
            className="progress"
            style={{ height: "6px", borderRadius: "3px" }}
          >
            <div
              className={
                (project.progress / 124) * 100 > 0 &&
                (project.progress / 124) * 100 < 40
                  ? "progress-bar bg-secondary progress-red"
                  : (project.progress / 124) * 100 > 40 &&
                    (project.progress / 124) * 100 < 65
                  ? "progress-bar bg-secondary progress-yellow"
                  : "progress-bar bg-secondary"
              }
              role="progressbar"
              style={{
                width: (project.progress / 124) * 100
              }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default latestprojects;
