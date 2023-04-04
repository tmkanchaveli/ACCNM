import React from "react";
import "./MaintenanceRequests.css";

const MaintenanceRequests = () => {
  return (
    <div className="maintenance-requests-container">
      <h1 className="page-title">Maintenance Requests</h1>
      <div className="task-container">
        <div className="task-card">
          <h2 className="task-title">Fix the elevator</h2>
          <p className="task-description">
            The elevator has been acting up lately and needs repair.
          </p>
        </div>
        <div className="task-card">
          <h2 className="task-title">Fix the building lighting</h2>
          <p className="task-description">
            Some of the lights in the building have gone out and need replacing.
          </p>
        </div>
        <div className="task-card">
          <h2 className="task-title">Clean the pool</h2>
          <p className="task-description">
            The pool needs to be cleaned and maintained for the upcoming season.
          </p>
        </div>
        <div className="task-card">
          <h2 className="task-title">Repair the roof</h2>
          <p className="task-description">
            The roof has been leaking and needs to be fixed before it causes
            damage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceRequests;
