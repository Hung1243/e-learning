import React from "react";

const ProfileTab = () => {
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h6 className="mb-3">Name: <span>Ang</span></h6>
                            <hr />
                            <h6 className="mb-3 mt-3">Email: <span>Ang@gmail.com</span></h6>
                            <hr />
                            <h6 className="mb-2 mt-3">Phone: <span>7979</span></h6>
                            <hr />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <h6 className="mb-3 ">Account: <span>Ang</span></h6>
                            <hr />
                            <h6 className="mb-3 mt-3">Group: <span>GP01</span></h6>
                            <hr />
                            <h6 className="mb-2 mt-3">Position: <span>HV</span></h6>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gutters-sm">
                <div className="col-sm-12 mb-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h6 className="d-flex align-items-center mb-3">
                                <i className="material-icons text-info mr-2 text-uppercase fw-bold">
                                    ACHIEVED SKILLS
                                </i>
                            </h6>
                            <small>HTML</small>
                            <div className="progress mb-3" style={{ height: "5px" }}>
                                <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: "90%" }}
                                    aria-valuenow="90"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <small>CSS</small>
                            <div className="progress mb-3" style={{ height: "5px" }}>
                                <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow="85"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <small>JavaScript</small>
                            <div className="progress mb-3" style={{ height: "5px" }}>
                                <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: "89%" }}
                                    aria-valuenow="89"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <small>ReactJS</small>
                            <div className="progress mb-3" style={{ height: "5px" }}>
                                <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: "55%" }}
                                    aria-valuenow="55"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <small>MongoDB</small>
                            <div className="progress mb-3" style={{ height: "5px" }}>
                                <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: "49%" }}
                                    aria-valuenow="49"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileTab;